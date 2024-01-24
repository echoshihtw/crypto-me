import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())
const PORT = parseInt(process.env.PORT, 10) || 3001;

app.get("/api/crypto", async (req, res) => {
    let response;
    try {
        const coinMarketCapUrl = `${process.env.CMC_API_UTL}/quotes/latest?symbol=BTC,ETH,ITC,XMR,XRP,DOGE,DASH,MAID,LSK,SJCX`;
        const options = {
            headers: {
                "X-CMC_PRO_API_KEY": process.env.CMC_PRO_API_KEY,
            },
        };
        response = await axios.get(coinMarketCapUrl, options);
        const coinData = response.data.data;
        const formattedData = Object.keys(coinData).map((key) => ({
            ...coinData[key],
        }));
        res.json({data: formattedData});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get("/", (req, res) => {
    res.json({message: "Hello from server!"});
});
