import { api } from '@/config/api';
import { findUnitType } from '@/utils/findUnitType';
import { ProductType } from '@/models/ProductsList';
import { makeParams } from '@/utils/makeParams';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

type FetchProductsListFilters = Partial<{
  postId: number;
  search: string;
}>;

const fetchProductsList = async (
  filters?: FetchProductsListFilters
): Promise<ProductType[]> => {
  const params = makeParams(filters);

  const res = await api.get(`/list${params}`);

  return res.data;
};

export const useFetchProductsList = (
  initialFilters?: FetchProductsListFilters
) => {
  const [filters, setFilters] = React.useState<
    FetchProductsListFilters | undefined
  >(initialFilters);

  const { data, isLoading } = useQuery({
    queryKey: ['productsList', filters],
    queryFn: () => fetchProductsList(filters),
    refetchOnWindowFocus: 'always',
    staleTime: 1000 * 60,
    select: (data) => {
      return data.map((product) => {
        const initialUnitType = findUnitType(product);
        return {
          ...product,
          cartInfo: {
            quantidade: 0,
            valorTotal: 0,
            unidadeSelecionada: initialUnitType!,
          },
        };
      });
    },
  });

  return {
    productsListData: data,
    isProductsListLoading: isLoading,
    setProductsListFilters: setFilters,
  };
};
