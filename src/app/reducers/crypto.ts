import { createSlice } from '@reduxjs/toolkit';
import { CoinItem } from '../../models/coinMapper';

interface CryptoState {
  data: CoinItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CryptoState = {
  data: [],
  isLoading: true,
  error: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCryptoData: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setCryptoData, setError } = cryptoSlice.actions;
export default cryptoSlice.reducer;
