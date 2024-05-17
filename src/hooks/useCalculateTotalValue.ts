import React from 'react';
import { useAppDispatch } from './useReduxHooks';
import {
  CartProductInfo,
  ProductType,
  UnidadesDisponiveisType,
} from '@/models/ProductsList';
import { updateProductTotalValue } from '@/lib/redux/cart/cartReducer';

interface CalculateTotalValueHookState {
  product: ProductType;
  cartInfo: CartProductInfo;
  unitTypeSelected: UnidadesDisponiveisType;
}

export const useCalculateTotalValue = ({
  product,
  cartInfo,
  unitTypeSelected,
}: CalculateTotalValueHookState) => {
  const dispatch = useAppDispatch();

  const valorPorUnidade = unitTypeSelected.vl_preco_unidade;
  console.log(valorPorUnidade);

  let valorTotal: number = valorPorUnidade || 0;

  if (cartInfo.quantidade > 0) {
    const { quantidade } = cartInfo;

    valorTotal = valorPorUnidade * quantidade;
  }

  React.useEffect(() => {
    dispatch(
      updateProductTotalValue({ produto: product, valorTotal: valorTotal })
    );
  }, [valorTotal, product, dispatch]);

  return valorTotal;
};
