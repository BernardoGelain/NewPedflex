import React from 'react';
import Swal, { SweetAlertOptions } from 'sweetalert2';

export function useNotification() {
  const alert = React.useCallback(
    ({ title = '', text = '', icon = 'info', ...rest }: SweetAlertOptions) => {
      return Swal.fire({
        title,
        text,
        icon,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#f26c38',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
        ...rest,
      });
    },
    []
  );

  const snackbar = React.useCallback(
    ({ title = '', icon = 'success' }: SweetAlertOptions) => {
      return Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      }).fire({
        title,
        icon,
      });
    },
    []
  );

  return { alert, snackbar };
}
