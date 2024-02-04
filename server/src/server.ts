import http from "http";
import dotenv from "dotenv";
import { app } from "./app";
import cryptoPriceSocket from "./sockets/cryptoPriceSocket";
import createSocketServer from "./sockets/createSocketServer";

export let lastUpdated: number;

if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: ".env.test" });
} else {
  dotenv.config({ path: ".env" });
}

const PORT: number =
  process.env.NODE_ENV === "test"
    ? 4200
    : parseInt(process.env.PORT as string, 10) || 3003;

export const server = http.createServer(app);
const io = createSocketServer(server);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

cryptoPriceSocket(io);
