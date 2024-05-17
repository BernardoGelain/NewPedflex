import { PayloadAction } from '@reduxjs/toolkit';
import { CartSliceState } from '../cartReducer';
import { ProductType } from '@/models/ProductsList';
import { findProductInCart } from '@/utils/findProductInCart';

type PayloadContent = ProductType;

export const removeFromCartAction = (
  state: CartSliceState,
  action: PayloadAction<PayloadContent>
) => {
  const produto = action.payload;

  const productInCart = findProductInCart(state.produtosCarrinho, produto);

  if (productInCart) {
    productInCart.cartInfo.quantidade -= 1;
    return;
  }

  const newState = state.produtosCarrinho.filter(
    (products) => products.cd_produto !== produto.cd_produto
  );

  state.produtosCarrinho = newState;
};
