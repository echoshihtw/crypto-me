import {CoinItem, mapCoinData, RawCoinData} from '../CoinMapper';

describe('mapCoinData Function', () => {
  test('maps data to CoinItem correctly', () => {
    const apiData: RawCoinData = {
      data: {
        name: 'Bitcoin',
        quote: {
          USD: {
            price: 50000,
            volume_24h: 1000000,
            volume_change_24h: '5.0', // Note: String value, will be converted to number
          },
        },
      },
    };

    const expectedCoinObject: CoinItem = {
      name: 'Bitcoin',
      price: 50000,
      volume_24: 1000000,
      volume_change_24h: 5.0,
    };

    const mappedCoin = mapCoinData(apiData);
    expect(mappedCoin).toEqual(expectedCoinObject);
  });
});
