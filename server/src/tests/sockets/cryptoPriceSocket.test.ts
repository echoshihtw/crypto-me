import fetchCryptoPrices from "../../services/fetchCryptoPrices";
import cryptoPriceSocket, {
  cryptoPrices,
  getCryptoPrices,
} from "../../sockets/cryptoPriceSocket";
import http from "http";
import {
  Server as SocketIOServer,
  type Socket as ServerSocket,
} from "socket.io";
import { io as ioc, type Socket as ClientSocket } from "socket.io-client";
import { createServer } from "node:http";
import { type AddressInfo } from "node:net";

const mockCryptoPrices = { BTC: "42000", ETH: "3200" };

jest.mock("../../services/fetchCryptoPrices", () => jest.fn());

describe("getCryptoPrices", () => {
  beforeAll(() => {
    (fetchCryptoPrices as jest.Mock).mockResolvedValue(mockCryptoPrices);
  });

  it("fetches crypto prices and updates global variables", async () => {
    await getCryptoPrices();

    expect(cryptoPrices).toEqual(mockCryptoPrices);
  });
});

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
  let serverSocket: ServerSocket;
  let clientSocket: ClientSocket;
  let mockCryptoPrices: any;

  beforeAll((done) => {
    const httpServer = createServer();
    io = new SocketIOServer(httpServer, {});
    httpServer.listen(() => {
      const port = (httpServer.address() as AddressInfo).port;
      clientSocket = ioc(`http://localhost:${port}`);
      io.on("connection", (socket) => {
        serverSocket = socket;
      });
      clientSocket.on("connect", done);
      done();
    });
  });

  afterAll((done) => {
    io.close();
    clientSocket.disconnect();
    done();
  });

  beforeEach(() => {
    io = cryptoPriceSocket(httpServer);
  });

  it("should create and configure socket.io server", () => {
    expect(SocketIOServer).toHaveBeenCalledWith(httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET"],
      },
    });
  });
  it("should connect to the /crypto-price namespace", () => {
    expect(io.of).toHaveBeenCalledWith("/crypto-price");
  });
});
