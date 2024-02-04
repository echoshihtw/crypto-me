import http from "http";
import { type AddressInfo } from "node:net";
import { Server as SocketIOServer } from "socket.io";
import { createServer } from "node:http";
import { io as ioc, type Socket as ClientSocket } from "socket.io-client";
import cryptoPriceSocket from "../../sockets/cryptoPriceSocket";
import createSocketServer from "../../sockets/createSocketServer";
import updateCryptoPrices from "../../services/updateCryptoPrice";
import { getPrice } from "../../stateManager";
import fetchCryptoPrice from "../../services/fetchCryptoPrices";

jest.mock("../../stateManager", () => ({
  getLastUpdated: jest.fn(),
  getPrice: jest.fn(),
}));

jest.mock("../../services/updateCryptoPrice", () => jest.fn());

jest.mock("socket.io", () => {
  return {
    Server: jest.fn(() => ({
      of: jest.fn().mockReturnThis(),
      to: jest.fn().mockReturnThis(),
      emit: jest.fn(),
      on: jest.fn().mockImplementation((event, callback) => {
        if (event === "connection") {
          callback({
            id: "testSocketId",
            join: jest.fn(),
          });
        }
      }),
      sockets: {
        size: 1,
        on: jest.fn(),
      },
    })),
  };
});

describe("cryptoPriceSocket", () => {
  let httpServer: http.Server;
  let io: SocketIOServer;
  let clientSocket: ClientSocket;

  beforeAll((done) => {
    httpServer = http.createServer();
    io = createSocketServer(httpServer);
    httpServer.listen(() => {
      const port = (httpServer.address() as AddressInfo).port;
      clientSocket = ioc(`http://localhost:${port}`);
      clientSocket.on("connect", done);
    });
    cryptoPriceSocket(io);
    done();
  });

  afterAll((done) => {
    io.close();
    httpServer.close();
    clientSocket.close();
    done();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create a namespace '/crypto-price'", () => {
    expect(io.of("/crypto-price")).toBeDefined();
  });

  it("should emits current price on new socket connection", () => {
    (getPrice as jest.Mock).mockResolvedValue(100);
    io.of("/crypto-price").emit("current-price", (price: number) => {
      expect(price).toBe(100);
    });
  });

  it("updates and emits prices periodically", () => {
    jest.useFakeTimers();
    (getPrice as jest.Mock).mockResolvedValue(200);
    jest.advanceTimersByTime(60000);

    io.of("/crypto-price").emit("update-price", (price: number) => {
      expect(price).toBe(200);
    });
    jest.useRealTimers();
  });

  it("does not update crypto price when no sockets are connected", () => {
    jest.advanceTimersByTime(60000);
    expect(updateCryptoPrices).not.toHaveBeenCalled();
  });
});
