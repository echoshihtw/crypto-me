# Crypto-Me: a realtime cryptocurrency price list



## Getting Started

To start the project locally, 
1. clone the repo 
    ```
    git clone https://github.com/echoshihtw/crypto-me.git
    ```
2. Install dependencies from the project root directory
    ```
    cd crypto-me

    # Install root dependencies
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
    # (recommended) for both client and server 
    npm start
   
   # client
   npm run start:client
   
   # server
    npm run start:server
     ```
6. open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Project Structure
```
crypto-me/
│
├── client/                                # Frontend directory
│   ├── public/                            # Public assets
│   │   ├── server.html                     # Main HTML file
│   │   └── favicon.ico                    # Favicon
│   │
│   ├── src/                               # Frontend source code
│   │   ├── components/                    # React components
│   │   │   ├── CoinOverview/              # Example component
│   │   │   └── ...
│   │   │
│   │   ├── server/                        # Redux-toolkit store
│   │   │   ├── reducers/                  # Redux-toolkit reducers
│   │   │   │   ├── tests/                 # Unit test for reducers file
│   │   │   │   ├── crypto.ts              # Reducer for crypto data
│   │   │   │   └── ...
│   │   │   └── ...
|   |   |
│   │   │   ├── selector/                  # Redux-toolkit selectors
│   │   │   │   ├── tests/                 # Unit test for selectors file
│   │   │   │   ├── crypto.ts              # Selector for crypto data
│   │   │   │   └── ...
│   │   │   ├── hooks.ts                   # Custom hooks
│   │   │   └── ...
│   │   │
│   │   ├── containers/                    # API service integration
│   │   │   ├── ErrorDialog.tsx            # Error dialog component
│   │   │   ├── RealtimeUpdatePage.tsx     # Realtime update page component
│   │   │   └── ...
│   │   │
│   │   ├── models/                        # Data models
│   │   │   ├── tests/                     # Unit test for models file
│   │   │   ├── CoinMapper.ts              # Mapper for coin data
│   │   │   └── ...
│   │   │
│   │   ├── App.tsx                        # Main React application component
│   │   ├── server.tsx                     # Entry point for React application
│   │   ├── server.css                     # Global styles
│   │   ├── configureStore.ts              # Redux-toolkit store configuration
│   │   └── server.tsx                     # Entry point for React application
│   │
│   ├── package.json                       # Frontend dependencies and scripts
│   ├── tailwind.config.js                 # Tailwind configuration file
│   ├── tsconfig.json                      # Typescript configuration file
│   ├── jest.config.js                     # Jest configuration file
│   ├── tsconfig.jest.json                 # Jest Typescript configuration file
│   └── ...
│
├── server/                                # Backend directory
│   ├── src/
│   ├── config/
│   │   └── config.ts                      # Configuration settings, including API keys
│   │
│   ├── types/
│   │   └── types.ts                       # TypeScript types and interfaces
│   │
│   ├── services/
│   │   └── apiService.ts                  # Service to handle API requests to CoinMarketCap
│   │
│   ├── sockets/
│   │   └── socketHandler.ts               # Socket.io setup and event handlers
│   │
│   └── app.ts                             # Main server application
│
├── tests/
│   ├── config/
│   │   └── config.test.ts                 # Unit tests for Configuration settings
│   │
│   ├── services/
│   │   └── apiService.test.ts             # Unit tests for API service
│   │
│   └── sockets/
│       └── socketHandler.test.ts          # Unit tests for socket handling
│
├── tsconfig.json                          # TypeScript configuration
├── package.json                           # Project dependencies and scripts
└── README.md                              # Project documentation

```

