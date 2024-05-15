import { PayloadAction } from '@reduxjs/toolkit';
import { CartSliceState } from '../cartReducer';
import { ProductType } from '@/models/ProductsList';

type PayloadContent = ProductType;

export const removeFromCartAction = (
  state: CartSliceState,
  action: PayloadAction<PayloadContent>
) => {
  const produto = action.payload;
  const newState = state.produtosCarrinho.filter(
    (products) => products.cd_produto !== produto.cd_produto
  );

  state.produtosCarrinho = newState;
};
