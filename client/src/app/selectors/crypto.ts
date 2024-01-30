import { RootState } from '../../configureStore';

export const selectCryptoData = (state: RootState) => state.crypto.data;
export const selectIsLoading = (state: RootState) => state.crypto.isLoading;
export const getCryptoError = (state: RootState) => state.crypto.error;
