import React from 'react';
import { HomePageButton } from '@/components/HomeButton/HomeButton';
import { useFetchProductsList } from '@/services/productsList';
import { ProductCard } from './productCard/productCard';
import { useAppSelector } from '@/hooks/useReduxHooks';
import { ProductType } from '@/models/ProductsList';

export function ProductsList() {
  const { productsListData } = useFetchProductsList();
  const { produtosCarrinho } = useAppSelector((state) => state.cart);

  const assembleList = (): ProductType[] => {
    if (productsListData && productsListData.length > 0) {
      return productsListData.map((it, i) => {
        if (
          produtosCarrinho[i] &&
          it.cd_produto === produtosCarrinho[i].cd_produto
        ) {
          return {
            ...it,
            cartInfo: produtosCarrinho[i].cartInfo,
          };
        }
        return it;
      });
    }
    return productsListData ?? [];
  };

  return (
    <div>
      <h1>PRODUCTSLISTS</h1>

      <HomePageButton linkTo="/carrinho" title="CART" />

      {assembleList().map((product, i) => (
        <ProductCard
          key={product.cd_produto}
          product={product}
          cartInfo={product.cartInfo}
        />
      ))}
    </div>
  );
}
