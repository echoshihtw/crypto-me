import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import RealtimeUpdatePage from '../RealtimeUpdatePage';

const mockStore = configureStore([]);

jest.mock('../../app/hooks', () => ({
  useAppDispatch: () => jest.fn(),
  useAppSelector: jest.fn((fn) => fn()),
}));

jest.mock('socket.io-client', () => {
  const mockSocket = {
    emit: jest.fn(),
    on: jest.fn((event, callback) => {
      if (event === 'current-price') {
        callback([{ id: 'bitcoin', price: '42000' }]);
      }
    }),
  };
  return jest.fn(() => mockSocket);
});

describe('RealtimeUpdatePage', () => {
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

  it('renders RealtimeUpdatePage component', async () => {
    render(
      <Provider store={store}>
        <RealtimeUpdatePage />
      </Provider>,
    );

    expect(
      screen.getByText('Cryptocurrency Realtime Price'),
    ).toBeInTheDocument();
  });
});
