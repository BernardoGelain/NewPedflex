import { fakeApi } from "@/config/api";
import { PostType } from "@/models/Posts";
import { makeParams } from "@/utils/makeParams";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type FetchPostsFilters = Partial<{
  postId: number;
  search: string;
}>;

const fetchPosts = async (filters?: FetchPostsFilters): Promise<PostType[]> => {
  const params = makeParams(filters);

  const res = await fakeApi.get(`/comments${params}`);

  return res.data;
};

export const useFetchPosts = (initialFilters?: FetchPostsFilters) => {
  const [filters, setFilters] = React.useState<FetchPostsFilters | undefined>(
    initialFilters
  );

  const { data, isLoading } = useQuery({
    queryKey: ["posts", filters],
    queryFn: () => fetchPosts(filters),
    refetchOnWindowFocus: "always",
    staleTime: 1000 * 60,
    select: (data) => {
      return data.map((post) => post);
    },
  });

  return {
    postsData: data,
    isPostsLoading: isLoading,
    setFetchPostsFilters: setFilters,
  };
};
