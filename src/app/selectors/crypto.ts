// src/selectors/cryptoSelectors.ts

import { RootState } from '../../configureStore';

// Selectors
export const selectCryptoData = (state: RootState) => state.crypto.data;
export const selectIsLoading = (state: RootState) => state.crypto.isLoading;
export const getCryptoError = (state: RootState) => state.crypto.error;
