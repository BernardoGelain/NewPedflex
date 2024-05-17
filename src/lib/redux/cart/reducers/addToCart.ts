import { PayloadAction } from '@reduxjs/toolkit';
import { CartSliceState } from '../cartReducer';
import { ProductType, UnidadesDisponiveisType } from '@/models/ProductsList';
import { findProductInCart } from '@/utils/findProductInCart';

type PayloadContent = {
  produto: ProductType;
  unidadeSelecionada: UnidadesDisponiveisType;
};

/**
 * !REGRAS NÃO COBERTAS AGR
 * * quantidade mínima necessária do produto (valor do input tem mínimo de compra)
 * * quantidade de múltiplo do produto (3 em 3)
 */

export const addToCartAction = (
  state: CartSliceState,
  action: PayloadAction<PayloadContent>
) => {
  const { produto, unidadeSelecionada } = action.payload;

  // verifica se o produto já está no carrinho
  const productInCart = findProductInCart(state.produtosCarrinho, produto);

  //const valorPorUnidade = unidadeSelecionada.vl_preco_unidade;

  // se o produto já está no carrinho
  if (productInCart) {
    const newQuantidade = productInCart.cartInfo.quantidade + 1;
    //const valorTotal = valorPorUnidade * newQuantidade;

    productInCart.cartInfo.quantidade = newQuantidade;
    //productInCart.cartInfo.valorTotal = valorTotal;
    return;
  }

  state.produtosCarrinho.push({
    ...produto,
    cartInfo: {
      ...produto.cartInfo,
      unidadeSelecionada,
      quantidade: 1,
      //valorTotal: valorPorUnidade,
    },
  });
};
