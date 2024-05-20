import { ProductType } from '@/models/ProductsList';
import { createSlice, Slice } from '@reduxjs/toolkit';

import { addToCartAction } from './reducers/addToCart';
import { removeFromCartAction } from './reducers/removeFromCart';
import { selectUnitTypeAction } from './reducers/selectUnitType';
import { updateProductTotalValueAction } from './reducers/updateProductTotalValue';
import { selectPaymentConditionAction } from './reducers/selectPaymentCondition';
import { CondicoesDisponiveisType } from '@/models/HeaderData';

export type CartSliceState = {
  produtosCarrinho: ProductType[];
  condicaoPagamento: CondicoesDisponiveisType;
};

const cartSlice: Slice<CartSliceState> = createSlice({
  name: 'cart',
  initialState: {
    produtosCarrinho: [] as ProductType[],
    condicaoPagamento: {} as CondicoesDisponiveisType,
  },

  //reducers para manipular estado
  reducers: {
    addToCart: addToCartAction,
    removeFromCart: removeFromCartAction,
    selectPaymentCondition: selectPaymentConditionAction,
    selectUnitType: selectUnitTypeAction,
    updateProductTotalValue: updateProductTotalValueAction,
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  selectUnitType,
  selectPaymentCondition,
  updateProductTotalValue,
} = cartSlice.actions;
