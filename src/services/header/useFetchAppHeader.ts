import { api } from '@/config/api';
import { HeaderDataType } from '@/models/HeaderData';
import { useQuery } from '@tanstack/react-query';

const fetchAppHeader = async (): Promise<HeaderDataType> => {
  const res = await api.get(`/header`);

  return res.data;
};

export const useFetchAppHeader = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['header'],
    queryFn: () => fetchAppHeader(),
    staleTime: 10000,
    refetchOnWindowFocus: 'always',
  });

  return { headerData: data, isHeaderLoading: isLoading };
};
