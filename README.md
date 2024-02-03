# Crypto-Me: a realtime cryptocurrency price list

## Recommended Node.js Version

This project is best compatible with Node.js version 18.x and above.

## Getting Started

To start the project locally, 
1. clone the repo 
    ```
    git clone https://github.com/echoshihtw/crypto-me.git
    ```
2. Install dependencies from the project root directory
    ```
    cd crypto-me

    npm install
    ```
3. Install dependencies for client and server
    ``` 
    npm run install:all
    ```
    
4. create your own .env file in the server directory and add your own API key from [CoinMarketCap](https://coinmarketcap.com/api/) 
    ```
    CMC_PRO_API_KEY=your_api_key
    ```
5. start the project
    ```
    npm start
     ```
6. open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Unit Tests

Run unit tests for both client and server dir, from the root package.json

```
npm run test
```
