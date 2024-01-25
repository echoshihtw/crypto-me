const axios = require("axios");
const fetchDataFromApi = async () => {
  try {
    const coinMarketCapUrl = `${process.env.CMC_API_URL}/quotes/latest?symbol=BTC,ETH,ITC,XMR,XRP,DOGE,DASH,MAID,LSK,SJCX`;
    const options = {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.CMC_PRO_API_KEY,
        " Access-Control-Allow-Origin": "*",
      },
    };
    const response = await axios.get(coinMarketCapUrl, options);
    const coinData = response.data.data;
    return Object.keys(coinData).map((key) => ({
      ...coinData[key],
    }));
  } catch (error) {
    console.error("Error fetching data from the API:", error.message);
    return null;
  }
};

module.exports = { fetchDataFromApi };
