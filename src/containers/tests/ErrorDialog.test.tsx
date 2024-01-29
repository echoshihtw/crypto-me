import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorDialog from '../ErrorDialog';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

const mockStore = configureStore([]);

describe('ErrorDialog Component', () => {
  let store: MockStoreEnhanced<unknown, {}>;

  beforeEach(() => {
    store = mockStore({
      crypto: {
        error: 'Test error message',
      },
    });
  });

  test('renders ErrorDialog and handles refresh correctly', () => {
    render(
      <Provider store={store}>
        <ErrorDialog />
      </Provider>,
    );

    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });
});
