import {
  ChangeZeroToUndefined,
  CoinDataProps,
  CoinItem,
  mapCoinData,
} from '../CoinMapper';
import '@testing-library/jest-dom';

describe('mapCoinData function', () => {
  test('correctly maps CoinDataProps to CoinItem with zero values converted to undefined', () => {
    const mockData: CoinDataProps = {
      id: 'bitcoin',
      name: 'Bitcoin',
      price: 50000,
      volume_24h: 1000000,
      percent_change_24h: 0,
    };

    const mappedData: CoinItem = mapCoinData(mockData);

    expect(mappedData.name).toBe('Bitcoin');
    expect(mappedData.price).toBe(50000);
    expect(mappedData.volume_24).toBe(1000000);
    expect(mappedData.percent_change_24h).toBeUndefined();
  });

  test('ChangeZeroToUndefined function converts zero to undefined', () => {
    expect(ChangeZeroToUndefined(0)).toBeUndefined();
    expect(ChangeZeroToUndefined(100)).toBe(100);
  });
});
