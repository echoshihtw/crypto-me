import express from "express";
import http from "http";
import { cryptoPrices, getCryptoPrices } from "./services/apiService";
import { setupSocketServer } from "./sockets/socketHandler";
import cors from "cors";
import dotenv from "dotenv";

if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: ".env.test" });
} else {
  dotenv.config({ path: ".env" });
}

const PORT: number =
  process.env.NODE_ENV === "test"
    ? 4200
    : parseInt(process.env.PORT as string, 10) || 3003;

export const app = express();
app.use(
  cors({
    origin: "*",
  }),
);

const server = http.createServer(app);
const io = setupSocketServer(server);

// Get crypto price when there is at least one socket connected
// and emit to "crypto-price" namespace every 60 seconds.
// Otherwise, do nothing.
setInterval(async () => {
  if (io.of("/crypto-price").sockets.size === 0) {
    console.log("No socket connected, returning early...");
    return;
  }
  try {
    await getCryptoPrices();
    io.of("/crypto-price").emit("update-price", cryptoPrices);
    console.log(`${Date.now()}: Emitted update-price`);
  } catch (error) {
    console.error("Failed to fetch crypto prices:", error);
  }
}, 6000);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
