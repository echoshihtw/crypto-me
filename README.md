# Crypto-Me: a realtime cryptocurrency price list



## How to use

To start the project locally, 
1. clone the repo and run `npm run install:all` the project root directory to install dependencies for both client and server.
2. create your own .env file in the server directory and add your own API key from [CoinMarketCap](https://coinmarketcap.com/api/) as `CMC_PRO_API_KEY=your_api_key`
3. run `npm start` on the root directory to start the project for both client and server.
4. open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



## Project Structure
```
crypto-me/
│
├── client/                                # Frontend directory
│   ├── public/                            # Public assets
│   │   ├── index.html                     # Main HTML file
│   │   └── favicon.ico                    # Favicon
│   │
│   ├── src/                               # Frontend source code
│   │   ├── components/                    # React components
│   │   │   ├── CoinOverview/              # Example component
│   │   │   └── ...
│   │   │
│   │   ├── app/                           # Redux-toolkit store
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
│   │   ├── index.tsx                      # Entry point for React application
│   │   ├── index.css                      # Global styles
│   │   ├── configureStore.ts              # Redux-toolkit store configuration
│   │   └── index.tsx                      # Entry point for React application
│   │
│   ├── package.json                       # Frontend dependencies and scripts
│   ├── tailwind.config.js                 # Tailwind configuration file
│   ├── tsconfig.json                      # Typescript configuration file
│   ├── jest.config.js                     # Jest configuration file
│   ├── tsconfig.jest.json                 # Jest Typescript configuration file
│   └── ...
│
├── server/                                # Backend directory
│   ├── src/                               # Backend source code
│   │   ├── tests/                         # Unit tests
│   │   ├── server.ts                      # Backend server entry point
│   │   ├── apiService.ts                  # API service
│   │   └── ...
│   │
│   └── package.json                       # Backend dependencies and scripts
│   ├── tsconfig.json                      # Typescript configuration file
│   ├── jest.config.js                     # Jest configuration file
│   ├── tsconfig.ts-node.json              # Jest Typescript configuration file
│
├── package.json                           # Project dependencies and scripts
└── README.md                              # Project documentation

```

