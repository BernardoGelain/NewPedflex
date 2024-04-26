import { fakeApi } from "@/config/api";
import { PostType } from "@/models/Posts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createPost = async (post: PostType) => {
  const res = await fakeApi.post("/posts", post);

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
