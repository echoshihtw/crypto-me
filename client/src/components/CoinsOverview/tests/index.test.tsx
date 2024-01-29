import React from 'react';
import { render, screen } from '@testing-library/react';
import CoinsOverview from '../index';
import { CoinItem } from '../../../models/CoinMapper';

jest.mock('../CoinSkeleton', () => {
  return () => (
    <div data-testid={`mocked-coin-skeleton`}>Mocked CoinSkeleton</div>
  );
});
describe('CoinsOverview Component', () => {
  const mockCoins: CoinItem[] = [
    {
      name: 'Bitcoin',
      price: 50000,
      volume_24: 1000000,
      percent_change_24h: 5,
    },
    {
      name: 'Ethereum',
      price: 20000,
      volume_24: 1500000,
      percent_change_24h: -5,
    },
  ];

  test('renders CoinsOverview component with loading state', () => {
    render(<CoinsOverview title="Test Title" coins={[]} isLoading={true} />);

    for (let i = 0; i < 10; i++) {
      expect(screen.getAllByText('Mocked CoinSkeleton')[0]).toBeInTheDocument();
    }
  });

  test('renders CoinsOverview component with coins', () => {
    render(
      <CoinsOverview title="Test Title" coins={mockCoins} isLoading={false} />,
    );

    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
  });

  test('renders CoinsOverview component with default array when coins are empty and not loading', () => {
    render(<CoinsOverview title="Test Title" coins={[]} isLoading={false} />);

    for (let i = 0; i < 10; i++) {
      expect(screen.getAllByText('Mocked CoinSkeleton')[0]).toBeInTheDocument();
    }
  });
});
