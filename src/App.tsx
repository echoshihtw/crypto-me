import React from 'react';
import CoinsOverview from './components/CoinsOverview/index';

function App() {
  const coins = [
    {
      name: 'Bitcoin',
      price: '$1000',
    },
    {
      name: 'Either',
      price: '$1000',
    },
    {
      name: 'Litecoin',
      price: '$1000',
    },
    {
      name: 'Monero',
      price: '$1000',
    },
    {
      name: 'Ripple',
      price: '$1000',
    },
    {
      name: 'Dogecoin',
      price: '$1000',
    },
    {
      name: 'Dash',
      price: '$1000',
    },
    {
      name: 'Lisk',
      price: '$1000',
    },
  ];
  return <CoinsOverview coins={coins} title="Cryptocurrency Realtime price" />;
}

export default App;
