import React from 'react';
import { useAppDispatch } from '@/hooks/useReduxHooks';
import {
  CartProductInfo,
  ProductType,
  UnidadesDisponiveisType,
} from '@/models/ProductsList';

import {
  addToCart,
  removeFromCart,
  selectUnitType,
} from '@/lib/redux/cart/cartReducer';

import { formatInputCurrency } from '@/utils/validators';
import { useCalculateTotalValue } from '@/hooks/useCalculateTotalValue';

interface ProductCardProps {
  product: ProductType;
  cartInfo: CartProductInfo;
}

export function ProductCard({ product, cartInfo }: ProductCardProps) {
  const [unitTypeSelected, setUnitTypeSelected] =
    React.useState<UnidadesDisponiveisType>(cartInfo.unidadeSelecionada);
  const dispatch = useAppDispatch();

  const calculatedValue = useCalculateTotalValue({
    product,
    cartInfo,
    unitTypeSelected,
  });

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        marginBottom: '20px',
        alignItems: 'center',
      }}
    >
      <div>
        <h4>{product.nm_produto}</h4>
      </div>
      <div>
        {product.unidades_disponiveis.map((unitType) => (
          <button
            key={unitType.cd_unidade}
            style={{
              backgroundColor:
                unitTypeSelected.cd_unidade == unitType.cd_unidade
                  ? 'green'
                  : 'transparent',
            }}
            onClick={() => {
              setUnitTypeSelected(unitType);
              dispatch(
                selectUnitType({
                  produto: product,
                  unidadeSelecionada: unitType,
                })
              );
            }}
          >
            {unitType.ds_unidade}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <button
          style={{ padding: '5px 8px' }}
          onClick={() =>
            dispatch(
              addToCart({
                produto: product,
                unidadeSelecionada: unitTypeSelected,
              })
            )
          }
        >
          +
        </button>
        <span>{cartInfo.quantidade}</span>
        <button
          style={{ padding: '5px 8px' }}
          onClick={() => dispatch(removeFromCart(product))}
        >
          -
        </button>
      </div>

      <div>{formatInputCurrency(calculatedValue)}</div>
    </div>
  );
}
