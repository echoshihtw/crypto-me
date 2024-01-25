import React, { memo, useEffect } from 'react';
import CoinsOverview from '../components/CoinsOverview';
import {
  getCryptoError,
  selectCryptoData,
  selectIsLoading,
} from '../app/selectors/crypto';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setCryptoData, setError } from '../app/reducers/crypto';
import io from 'socket.io-client';
import { mapCoinData } from '../models/coinMapper';

const RealtimeUpdatePage = () => {
  const dispatch = useAppDispatch();
  const cryptoData = useAppSelector(selectCryptoData);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(getCryptoError);

  useEffect(() => {
    const socket = io('http://localhost:3001', {});

    socket.connect();
    socket.on('initialData', (data) => {
      const mappedData = data.map((item: any) => mapCoinData(item));
      dispatch(setCryptoData(mappedData));
    });

    socket.on('dataUpdate', (data) => {
      const mappedData = data.map((item: any) => mapCoinData(item));
      dispatch(setCryptoData(mappedData));
    });

    // Optional: Handle disconnect event
    socket.on('disconnect', () => {
      dispatch(setError('something went wrong....please try again later'));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  return (
    <CoinsOverview
      coins={cryptoData}
      title="Cryptocurrency Realtime price"
      isLoading={isLoading}
    />
  );
};

export default memo(RealtimeUpdatePage);
