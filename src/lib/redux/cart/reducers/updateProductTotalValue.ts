import { PayloadAction } from '@reduxjs/toolkit';
import { CartSliceState } from '../cartReducer';
import { ProductType } from '@/models/ProductsList';
import { findProductInCart } from '@/utils/findProductInCart';

type PayloadContent = {
  produto: ProductType;
  valorTotal: number;
};

export const updateProductTotalValueAction = (
  state: CartSliceState,
  action: PayloadAction<PayloadContent>
) => {
  const { produto, valorTotal } = action.payload;

  const productInCart = findProductInCart(state.produtosCarrinho, produto);

  if (productInCart) {
    productInCart.cartInfo.valorTotal = valorTotal;
    return;
  }
};
