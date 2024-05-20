import ModalDialog from '@/components/ModalDialog/ModalDialog';
import React from 'react';

type ModalProps = {
  children: React.ReactNode;
};

export type ModalConfig = {
  title: string;
  open: boolean;
  values?: Record<string, any>;
  modalContent: React.ReactNode | string | JSX.Element;
};

interface ModalContextType {
  modalConfig: ModalConfig;
  setModalConfig: React.Dispatch<React.SetStateAction<ModalConfig>>;
  closeModal: () => void;
}

export const ModalContext = React.createContext({} as ModalContextType);

export function ModalContextProvider({ children }: ModalProps) {
  const [modalConfig, setModalConfig] = React.useState<ModalConfig>({
    open: false,
    title: '',
    modalContent: '',
    values: {},
  });

  const closeModal = () => {
    setModalConfig({
      open: false,
      title: '',
      values: {},
      modalContent: '',
    });
  };

  return (
    <ModalContext.Provider value={{ modalConfig, setModalConfig, closeModal }}>
      {children}

      <ModalDialog {...modalConfig} onClose={closeModal} />
    </ModalContext.Provider>
  );
}
