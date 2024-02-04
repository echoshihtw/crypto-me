import React, { memo, useEffect, useMemo } from 'react';
import CoinsOverview from '../components/CoinsOverview';
import { selectCryptoData, selectIsLoading } from '../app/selectors/crypto';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setCryptoData, setIsLoading } from '../app/reducers/crypto';
import { mapCoinData } from '../models/CoinMapper';
import { Manager } from 'socket.io-client';

const RealtimeUpdatePage = () => {
  const dispatch = useAppDispatch();
  const cryptoData = useAppSelector(selectCryptoData);
  const isLoading = useAppSelector(selectIsLoading);

  const manager = useMemo(() => new Manager('http://localhost:3003'), []);
  let cryptoPriceSocket = useMemo(
    () => manager.socket('/crypto-price'),
    [manager],
  );

  useEffect(() => {
    cryptoPriceSocket.connect();
    dispatch(setIsLoading(true));

    cryptoPriceSocket.on('current-price', (data) => {
      dispatch(setIsLoading(false));
      const mappedData = data.map((item: any) => mapCoinData(item));
      dispatch(setCryptoData(mappedData));
    });

    cryptoPriceSocket.on('update-price', (data) => {
      if (data.length === 0) {
        return;
      }
      const mappedData = data.map((item: any) => mapCoinData(item));
      dispatch(setCryptoData(mappedData));
    });

    return () => {
      cryptoPriceSocket.off('current-price');
      cryptoPriceSocket.off('update-price');
      cryptoPriceSocket.disconnect();
    };
  }, [cryptoPriceSocket, dispatch]);

  return (
    <div className="h-full w-full grid place-items-center p-6">
      <CoinsOverview
        coins={cryptoData}
        title="Cryptocurrency Realtime Price"
        isLoading={isLoading}
      />
    </div>
  );
};

export default memo(RealtimeUpdatePage);
