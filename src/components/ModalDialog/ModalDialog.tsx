import React from 'react';
import { IconButton, ModalContainer, ModalContent } from './ModalDialog.styles';
import { useModalDialog } from '@/hooks/useModalDialog';

interface ModalDialogProps extends React.PropsWithChildren {
  open: boolean;
  title: string;
  onClose: React.Dispatch<any>;
  small?: boolean;
}

const ModalDialog: React.FC<ModalDialogProps> = ({
  children,
  small = false,
}) => {
  const {
    modalConfig: { open, title },
    closeModal,
  } = useModalDialog();

  return (
    <ModalContainer open={open}>
      <ModalContent small={small}>
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
            {/* <IconButton onClick={onClose}>
              <FaTimes size="20px" />
            </IconButton> */}
          </div>
        </div>
        <div>{children}</div>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
          <button type="button" onClick={closeModal}>
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
