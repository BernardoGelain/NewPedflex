import { PayloadAction } from '@reduxjs/toolkit';
import { CartSliceState } from '../cartReducer';
import { CondicoesDisponiveisType } from '@/models/HeaderData';

type PayloadContent = CondicoesDisponiveisType;

export const selectPaymentConditionAction = (
  state: CartSliceState,
  action: PayloadAction<PayloadContent>
) => {
  state.condicaoPagamento = action.payload;
};
