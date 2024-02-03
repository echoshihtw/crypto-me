import { createSlice } from '@reduxjs/toolkit';
import { CoinItem } from '../../models/CoinMapper';

interface CryptoState {
  data: CoinItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CryptoState = {
  data: [],
  isLoading: false,
  error: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCryptoData: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCryptoData, setError, setIsLoading } = cryptoSlice.actions;
export default cryptoSlice.reducer;
