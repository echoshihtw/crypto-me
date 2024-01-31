import express from "express";
import http from "http";
import { fetchCryptoPrices } from "./services/apiService";
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

setInterval(async () => {
  try {
    const cryptoPrices = await fetchCryptoPrices();
    io.emit("cryptoPricesUpdate", cryptoPrices);
  } catch (error) {
    console.error("Failed to fetch crypto prices:", error);
  }
}, 60000);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
