import { PersistGate } from 'redux-persist/integration/react';
import { ThemeContextProvider } from './contexts/themeContext';
import Routes from './routes/routes';
import { persistor, store } from './lib/redux/store';
import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query/queryClient';
import { ModalContextProvider } from './contexts/modalContext';
import { AppWrapperContextProvider } from './contexts/appWrapperContext';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <ThemeContextProvider>
            <ModalContextProvider>
              <AppWrapperContextProvider>
                <Routes />
              </AppWrapperContextProvider>
            </ModalContextProvider>
          </ThemeContextProvider>
        </Provider>
      </PersistGate>
    </QueryClientProvider>
  );
}

export default App;
