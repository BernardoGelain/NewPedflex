import React from 'react';
import { AppHeader } from '@/components/AppHeader/AppHeader';

export function AppWrapper({ children }: React.PropsWithChildren) {
  return (
    <div>
      <AppHeader />
      <div style={{ padding: '20px' }}>{children}</div>
    </div>
  );
}
