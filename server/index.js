import express from "express";
import axios from "axios";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = parseInt(process.env.PORT, 10) || 3001;

app.get("/api/crypto", async (req, res) => {
  try {
    const coinMarketCapUrl =
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
    const options = {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.CMC_PRO_API_KEY,
      },
    };
    const response = await axios.get(coinMarketCapUrl, options);
    const coinData = response.data.data;
    console.log(coinData);
    res.json({ data: coinData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
