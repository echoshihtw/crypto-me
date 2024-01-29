import React from 'react';
import CoinCard from '../CoinCard';
import { render, screen } from '@testing-library/react';

const mockCoin = {
  name: 'Bitcoin',
  price: 50000,
  volume_24: 1000000,
  percent_change_24h: 5,
};

describe('CoinCard Component', () => {
  test('renders CoinCard with correct data', () => {
    const { getByText } = render(<CoinCard coin={mockCoin} />);

    const coinName = screen.getByText('Bitcoin');
    expect(coinName).toBeInTheDocument();

    const priceElement = getByText(/50000/);
    expect(priceElement).toBeInTheDocument();

    const volumeLabel = screen.getByText('volume:');
    expect(volumeLabel).toBeInTheDocument();

    const changeLabel = screen.getByText('change:');
    expect(changeLabel).toBeInTheDocument();
  });
});
