import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import RealtimeUpdatePage from '../RealtimeUpdatePage';

const mockStore = configureStore([]);

describe('RealtimeUpdatePage Component', () => {
  let store: MockStoreEnhanced<unknown, {}>;

  beforeEach(() => {
    store = mockStore({
      crypto: {
        cryptoData: [],
        isLoading: false,
        error: null,
      },
    });
  });

  test('renders RealtimeUpdatePage component', async () => {
    render(
      <Provider store={store}>
        <RealtimeUpdatePage />
      </Provider>,
    );

    await waitFor(() => {
      expect(
        screen.getByText('Cryptocurrency Realtime price'),
      ).toBeInTheDocument();
    });
  });
});
