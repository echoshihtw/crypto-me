import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const PORT = parseInt(process.env.PORT, 10) || 3001;

app.get("/api/crypto", async (req, res) => {
  let response;
  try {
    const coinMarketCapUrl = `${process.env.CMC_API_URL}/listings/latest`;
    const options = {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.CMC_PRO_API_KEY,
      },
    };
    response = await axios.get(coinMarketCapUrl, options);
    const coinData = response.data.data;
    res.json({ data: coinData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Set up periodic execution
const interval = 2000; // 2 seconds
setInterval(async (req, res) => {
  try {
    const coinMarketCapUrl = `${process.env.CMC_API_URL}/listings/latest`;
    const options = {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.CMC_PRO_API_KEY,
      },
    };

    const response = await axios.get(coinMarketCapUrl, options);
    const coinData = response.data.data;
    res.json({ data: coinData });
    // You may want to store or process the data here, or emit an event, etc.
    console.log("Periodic update:", coinData);
  } catch (error) {
    console.error("Periodic update error:", error.message);
  }
}, interval);

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
