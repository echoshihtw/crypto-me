import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../configureStore';
import App from '../App';

test('renders App without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});
