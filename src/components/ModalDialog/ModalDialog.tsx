import React from 'react';
import { IconButton, ModalContainer, ModalContent } from './ModalDialog.styles';
import { ModalConfig } from '@/contexts/modalContext';

interface ModalDialogProps extends ModalConfig {
  onClose: React.Dispatch<any>;
}

const ModalDialog: React.FC<ModalDialogProps> = ({
  open,
  title,
  values,
  modalContent,
  onClose,
}) => {
  return (
    <ModalContainer open={open}>
      <ModalContent small={false}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
          <div>
            <h3>{title || 'Modal'}</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton onClick={onClose}>X</IconButton>
          </div>
        </div>
        <div>{modalContent}</div>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
          <button style={{ width: '100%', marginTop: '40px' }}>
            Confirmar
          </button>
        </div>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalDialog;
