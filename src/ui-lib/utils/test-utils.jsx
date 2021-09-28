import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'react-native-elements';
import Theme from '_theme/Theme';

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
