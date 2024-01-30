import express from "express";
import http from "http";
import { fetchCryptoPrices } from "./services/apiService";
import { setupSocketServer } from "./sockets/socketHandler.ts";
import cors from "cors";
import dotenv from "dotenv";

if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: ".env.test" });
} else {
  dotenv.config({ path: ".env" });
}

export const app = express();
app.use(cors());

const server = http.createServer(app);
const io = setupSocketServer(server);

setInterval(async () => {
  try {
    const cryptoPrices = await fetchCryptoPrices();
    console.log("cryptoPrices", cryptoPrices);
    io.emit("cryptoPricesUpdate", cryptoPrices);
  } catch (error) {
    console.error("Failed to fetch crypto prices:", error);
  }
}, 60000);

const PORT = process.env.PORT || 3003;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
