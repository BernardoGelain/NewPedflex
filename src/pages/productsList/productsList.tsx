import React from 'react';
import { HomePageButton } from '@/components/HomeButton/HomeButton';
import { useFetchProductsList } from '@/services/productsList';
import { ProductCard } from './productCard/productCard';
import { useAppSelector } from '@/hooks/useReduxHooks';
import { ProductType } from '@/models/ProductsList';
import { findProductInCart } from '@/utils/findProductInCart';

export function ProductsList() {
  const { productsListData } = useFetchProductsList();
  const { produtosCarrinho } = useAppSelector((state) => state.cart);

  const assembleList = React.useCallback((): ProductType[] => {
    if (productsListData && productsListData.length > 0) {
      return productsListData.map((product) => {
        const productInCart = findProductInCart(produtosCarrinho, product);
        if (productInCart) {
          return {
            ...product,
            cartInfo: productInCart.cartInfo,
          };
        }
        return product;
      });
    }
    return productsListData ?? [];
  }, [productsListData, produtosCarrinho]);

  return (
    <div>
      <h1>PRODUCTSLISTS</h1>

      <HomePageButton linkTo="/carrinho" title="CART" />

      {assembleList().map((product) => (
        <ProductCard
          key={product.cd_produto}
          product={product}
          cartInfo={product.cartInfo}
        />
      ))}
    </div>
  );
}
