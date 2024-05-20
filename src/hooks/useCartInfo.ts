import React from 'react';
import { useAppSelector } from './useReduxHooks';
import { CartProductInfo } from '@/models/ProductsList';
import { formatInputCurrency } from '../utils/validators';

type CartInfoReturnType = {
  cartTotalValue: string;
  cartQuantity: number;
};

export function useCartInfo(): CartInfoReturnType {
  const { produtosCarrinho } = useAppSelector((state) => state.cart);
  const [cartValues, setCartValues] = React.useState<Partial<CartProductInfo>>({
    valorTotal: 0,
    quantidade: 0,
  });

  React.useEffect(() => {
    const quantity = produtosCarrinho.length || 0;
    let totalValue = 0;

    produtosCarrinho.map((product) => {
      totalValue += product.cartInfo.valorTotal;
    });

    setCartValues({
      valorTotal: totalValue,
      quantidade: quantity,
    });
  }, [produtosCarrinho]);

  return {
    cartTotalValue: formatInputCurrency(cartValues.valorTotal ?? 0),
    cartQuantity: cartValues.quantidade!,
  };
}
