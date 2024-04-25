import { fakeApi } from "@/config/api";
import { PostType } from "@/models/Posts";
import { useQuery } from "@tanstack/react-query";

const fetchPost = async (id: number | null): Promise<PostType> => {
  const res = await fakeApi.get(`/posts/${id}`);

  return res.data;
};

export const useFetchPost = (id: number | null) => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
    enabled: !!id,
    select: (data) => {
      return data;
    },
  });

  return { postData: data, isPostLoading: isLoading };
};
