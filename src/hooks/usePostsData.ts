// api exportada de services
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// >src/types
export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// >src/services/api
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

const fetchPosts = async (): Promise<PostType[]> => {
  const res = await api.get("/posts");

  return res.data;
};

export const useFetchPosts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    select: (data) => {
      return data.map((post) => post);
    },
  });

  return { postsData: data, isPostsLoading: isLoading };
};

const createPost = async (post: PostType) => {
  const res = await api.post("/posts", post);

  return res.data;
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation({
    mutationKey: ["posts"],
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return { createPost: mutate, ...rest };
};
