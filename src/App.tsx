import React, { useEffect, useState } from 'react';
import CoinsOverview from './components/CoinsOverview/index';
import { mapCoinData } from './models/coinMapper';

function App() {
  const [coinData, setCoinData] = useState();
  useEffect(() => {
    fetch('/api/crypto')
      .then((res) => res.json())
      .then((data) => {
        const mappedCoinData = data.data.map((coin) => mapCoinData(coin));
        setCoinData(mappedCoinData);
      });
  }, []);
  return (
    <CoinsOverview coins={coinData} title="Cryptocurrency Realtime price" />
  );
}

export default App;
