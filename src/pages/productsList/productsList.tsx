import { HomePageButton } from '@/components/HomeButton/HomeButton';
import { useFetchProductsList } from '@/services/productsList';
import { ProductCard } from './productCard/productCard';
import { useAppSelector } from '@/hooks/useReduxHooks';

export function ProductsList() {
  const { productsListData } = useFetchProductsList();
  const { produtosCarrinho } = useAppSelector((state) => state.cart);

  return (
    <div>
      <h1>PRODUCTSLISTS</h1>

      <HomePageButton linkTo="/carrinho" title="CART" />

      {productsListData?.map((product, i) => (
        <ProductCard
          key={product.cd_produto}
          product={product}
          cartInfo={produtosCarrinho[i].cartInfo}
        />
      ))}
    </div>
  );
}
