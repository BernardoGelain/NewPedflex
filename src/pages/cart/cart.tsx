import { HomePageButton } from '@/components/HomeButton/HomeButton';
import { useAppSelector } from '@/hooks/useReduxHooks';

import { ProductCard } from '../productsList/productCard/productCard';

export function Cart() {
  const { produtosCarrinho } = useAppSelector((state) => state.cart);

  console.log('carihno', produtosCarrinho);

  return (
    <div>
      <h1>CART</h1>

      <HomePageButton linkTo="/listas" title="LISTA" />

      {produtosCarrinho?.map((product) => (
        <ProductCard
          key={product.cd_produto}
          product={product}
          cartInfo={product.cartInfo}
        />
      ))}
    </div>
  );
}
