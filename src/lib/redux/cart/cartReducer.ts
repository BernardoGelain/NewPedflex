import { ProductType } from '@/models/ProductsList';
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

import { addToCartAction } from './reducers/addToCart';
import { removeFromCartAction } from './reducers/removeFromCart';
import { selectUnitTypeAction } from './reducers/selectUnitType';
import { updateProductTotalValueAction } from './reducers/updateProductTotalValue';

export type CartSliceState = {
  produtosCarrinho: ProductType[];
  condicaoPagamento: number;
};

const cartSlice: Slice<CartSliceState> = createSlice({
  name: 'cart',
  initialState: {
    produtosCarrinho: [] as ProductType[],
    condicaoPagamento: 0,
  },

  //reducers para manipular estado
  reducers: {
    addToCart: addToCartAction,
    removeFromCart: removeFromCartAction,
    selectPaymentCondition: (state, action: PayloadAction<number>) => {
      state.condicaoPagamento = action.payload;
    },
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
