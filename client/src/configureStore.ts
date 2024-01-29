import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './app/reducers/crypto';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the configureStore itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred dispatch type: Dispatch & ThunkDispatch<RootState, undefined, UnknownAction>
export type AppDispatch = typeof store.dispatch;

export default store;
