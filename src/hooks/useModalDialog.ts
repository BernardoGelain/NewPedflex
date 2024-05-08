import { ModalContext } from '@/contexts/modalContext';
import { useContext } from 'react';

export function useModalDialog() {
  const context = useContext(ModalContext);

  return context;
}
