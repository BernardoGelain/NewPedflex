import { ProductType } from '@/models/ProductsList';

export const findUnitType = (product: ProductType) => {
  return product.unidades_disponiveis.find(
    (unit) => unit.cd_unidade == product.cd_unidade_padrao
  );
};
