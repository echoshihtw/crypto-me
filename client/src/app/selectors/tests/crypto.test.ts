import { getCryptoError, selectCryptoData, selectIsLoading } from '../crypto';
import { RootState } from '../../../configureStore';

describe('Crypto Selectors', () => {
  const mockState: RootState = {
    crypto: {
      data: [
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
      ],
      isLoading: false,
      error: null,
    },
  };

  test('selectCryptoData selector', () => {
    const selectedCryptoData = selectCryptoData(mockState);
    expect(selectedCryptoData).toEqual(mockState.crypto.data);
  });

  test('selectIsLoading selector', () => {
    const selectedIsLoading = selectIsLoading(mockState);
    expect(selectedIsLoading).toEqual(mockState.crypto.isLoading);
  });

  test('getCryptoError selector', () => {
    const selectedCryptoError = getCryptoError(mockState);
    expect(selectedCryptoError).toEqual(mockState.crypto.error);
  });
});
