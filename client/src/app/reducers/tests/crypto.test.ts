import cryptoReducer, {
  setCryptoData,
  setError,
  setIsLoading,
} from '../crypto';

describe('cryptoSlice reducer', () => {
  const initialState = {
    data: [],
    isLoading: false,
    error: null,
  };

  test('should handle setCryptoData action', () => {
    const payload = [
      { name: 'Bitcoin', price: 50000 },
      { name: 'Ethereum', price: 3000 },
    ];
    const action = setCryptoData(payload);
    const state = cryptoReducer(initialState, action);

    expect(state.data).toEqual(payload);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBeNull();
  });

  test('should handle setIsLoading action', () => {
    const action = setIsLoading(true);
    const state = cryptoReducer(initialState, action);

    expect(state.isLoading).toBe(true);
  });

  test('should handle setError action', () => {
    const errorMessage = 'Failed to fetch data';
    const action = setError(errorMessage);
    const state = cryptoReducer(initialState, action);

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });

  test('should return the initial state for unknown action', () => {
    const state = cryptoReducer(undefined, { type: 'unknownAction' });

    expect(state).toEqual(initialState);
  });
});
