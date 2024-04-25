import { fakeApi } from "@/config/api";
import { PostType } from "@/models/Posts";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async (): Promise<PostType[]> => {
  const res = await fakeApi.get(`/posts`);

  return res.data;
};

export const useFetchPosts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    refetchOnWindowFocus: "always",
    staleTime: 1000 * 60,

    select: (data) => {
      return data.map((post) => post);
    },
  });

  return { postsData: data, isPostsLoading: isLoading };
};
