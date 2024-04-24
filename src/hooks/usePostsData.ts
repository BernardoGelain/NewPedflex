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
  const res = await api.get(`/posts`);

  return res.data;
};

const createPost = async (post: PostType) => {
  const res = await api.post("/posts", post);

  return res.data;
};

const fetchPost = async (id: number | null): Promise<PostType> => {
  const res = await api.get(`/posts/${id}`);

  return res.data;
};

const deletePost = async (id: number) => {
  const res = await api.delete(`/posts/${id}`);

  return res.data;
};

const updatePost = async ({ id, post }: { id: number; post: PostType }) => {
  console.log("aaa", id);
  const res = await api.put(`/posts/${id}`, post);

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

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationKey: ["posts"],
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return { deletePost: mutate, ...rest };
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationKey: ["posts"],
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return { updatePost: mutate, ...rest };
};
