import { PayloadAction } from '@reduxjs/toolkit';
import { CartSliceState } from '../cartReducer';
import { ProductType, UnidadesDisponiveisType } from '@/models/ProductsList';
import { findProductInCart } from '@/utils/findProductInCart';

type PayloadContent = {
  unidadeSelecionada: UnidadesDisponiveisType;
  produto: ProductType;
};

export const selectUnitTypeAction = (
  state: CartSliceState,
  action: PayloadAction<PayloadContent>
) => {
  const { produto, unidadeSelecionada } = action.payload;

  const productInCart = findProductInCart(state.produtosCarrinho, produto);

  if (productInCart) {
    productInCart.cartInfo.unidadeSelecionada = unidadeSelecionada;
  }
};
