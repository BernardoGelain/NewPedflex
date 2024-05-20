import React from 'react';
import { CondicoesDisponiveisType } from '@/models/HeaderData';
import { useAppDispatch } from '@/hooks/useReduxHooks';
import { selectPaymentCondition } from '@/lib/redux/cart/cartReducer';

interface PaymentConditionModalContentProps {
  condicoesDisponiveis: CondicoesDisponiveisType[];
}

export function PaymentConditionModalContent({
  condicoesDisponiveis,
}: PaymentConditionModalContentProps) {
  const dispatch = useAppDispatch();

  const handleChangePayment = React.useCallback(
    (e: any) => {
      const paymentCondition = e.target.value;

      const selectedPaymentCondition = condicoesDisponiveis.find(
        (it) => it.cd_condicao == paymentCondition
      );

      dispatch(selectPaymentCondition(selectedPaymentCondition));
    },
    [dispatch, condicoesDisponiveis]
  );

  return (
    <div style={{ width: '100%' }}>
      <select onChange={handleChangePayment}>
        {condicoesDisponiveis.map((it) => (
          <option key={it.cd_condicao} value={it.cd_condicao}>
            {it.nm_condicao}
          </option>
        ))}
      </select>
    </div>
  );
}
