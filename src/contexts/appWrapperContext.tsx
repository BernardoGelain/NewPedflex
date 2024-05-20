import { AppHeader } from '@/components/AppHeader/AppHeader';
import ModalDialog from '@/components/ModalDialog/ModalDialog';
import { PaymentConditionModalContent } from '@/components/PaymentConditionModalContent./PaymentConditionModalContent';
import { useModalDialog } from '@/hooks/useModalDialog';
import { useAppSelector } from '@/hooks/useReduxHooks';
import { useFetchAppHeader } from '@/services/header';
import React from 'react';

type AppWrapperProps = {
  children: React.ReactNode;
};

interface AppWrapperContextType {}

export const AppWrapperContext = React.createContext(
  {} as AppWrapperContextType
);

export function AppWrapperContextProvider({ children }: AppWrapperProps) {
  const { setModalConfig } = useModalDialog();
  const { condicaoPagamento } = useAppSelector((state) => state.cart);
  const { headerData } = useFetchAppHeader();

  React.useEffect(() => {
    if (Object.keys(condicaoPagamento).length == 0) {
      setModalConfig({
        open: true,
        title: 'Escolha uma condição de pagamento',
        modalContent: (
          <PaymentConditionModalContent
            condicoesDisponiveis={headerData?.condicoesDisponiveis ?? []}
          />
        ),
      });
    }
  }, [setModalConfig, headerData, condicaoPagamento]);

  return (
    <AppWrapperContext.Provider value={{}}>
      <AppHeader />
      <div style={{ padding: '20px' }}>{children}</div>
    </AppWrapperContext.Provider>
  );
}
