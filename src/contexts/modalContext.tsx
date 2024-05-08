import React from 'react';

type ModalProps = {
  children: React.ReactNode;
};

type ModalConfig = {
  title: string;
  open: boolean;
  values?: Record<string, any>;
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
  });

  const closeModal = () => {
    setModalConfig({
      open: false,
      title: '',
      values: {},
    });
  };

  return (
    <ModalContext.Provider value={{ modalConfig, setModalConfig, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
