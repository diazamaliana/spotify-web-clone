import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import theme from '@chakra-ui/theme'
import { ChakraProvider } from '@chakra-ui/react'
import Login from '../pages/login';
import { store } from "../redux";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

test('renders login page', () => {
  render(
    <Provider store={store}>
        <ChakraProvider theme={theme}>
            <Login/>
        </ChakraProvider>
    </Provider>
  );
  const title = screen.getByText(/Listening is everything/i);
  expect(title).toBeVisible();

  const subtitle = screen.getByText(/Millions of songs and podcasts/i)
  expect (subtitle).toBeVisible();

  const loginButton = screen.getByText(/log in/i)
  expect(loginButton).toBeInTheDocument();
});
