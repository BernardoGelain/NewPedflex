import { AppHeader } from '@/components/AppHeader/AppHeader';
import React from 'react';

type AppWrapperProps = {
  children: React.ReactNode;
};

interface AppWrapperContextType {}

export const AppWrapperContext = React.createContext(
  {} as AppWrapperContextType
);

export function AppWrapperContextProvider({ children }: AppWrapperProps) {
  React.useEffect(() => {
    console.log('effect');
  }, []);

  return (
    <AppWrapperContext.Provider value={{}}>
      <AppHeader />
      <div style={{ padding: '20px' }}>{children}</div>
    </AppWrapperContext.Provider>
  );
}
