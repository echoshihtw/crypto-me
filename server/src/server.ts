import express from "express";
import http from "http";
import { fetchCryptoPrices } from "./services/apiService";
import { setupSocketServer } from "./sockets/socketHandler.ts";
import cors from "cors";

const app = express();
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

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
