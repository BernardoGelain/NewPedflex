import { ProductType } from '@/models/ProductsList';

export const findProductInCart = (
  /** Array de produtos que estão no carrinho */
  productsInCart: ProductType[],
  /** Produto atual para ser encontrado no carrinho */
  product: ProductType
) => {
  return productsInCart.find((item) => item.cd_produto === product.cd_produto);
};
