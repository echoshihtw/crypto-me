import React, {memo, useEffect} from 'react';
import CoinsOverview from '../components/CoinsOverview';
import {selectCryptoData, selectIsLoading} from '../app/selectors/crypto';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {fetchCryptoData} from '../app/reducers/crypto';

const RealtimeUpdatePage = () => {
    const dispatch = useAppDispatch();
    const cryptoData = useAppSelector(selectCryptoData);
    const isLoading = useAppSelector(selectIsLoading);
    // const error = useSelector((state: RootState) => state.crypto.error);

    useEffect(() => {
        dispatch(fetchCryptoData());
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
