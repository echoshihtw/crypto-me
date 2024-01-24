import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CoinItem, mapCoinData} from '../../models/coinMapper';
import {apiEndpoints} from '../services/api';

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

export const fetchCryptoData = createAsyncThunk<
    CoinItem[],
    void,
    { rejectValue: string }
>('crypto/fetchData', async (_, {rejectWithValue}) => {
    try {
        const response = await fetch(`${apiEndpoints.getCryptoData}`);
        const {data} = await response.json();
        const mappedData = data.map((item: any) => mapCoinData(item));
        return mappedData;
    } catch (error) {
        return rejectWithValue('Error fetching crypto data');
    }
});

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCryptoData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(
                fetchCryptoData.fulfilled,
                (state, action: PayloadAction<CoinItem[]>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.error = null;
                },
            )
            .addCase(
                fetchCryptoData.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.isLoading = false;
                    state.error = action.payload || 'An error occurred';
                },
            );
    },
});

export default cryptoSlice.reducer;
