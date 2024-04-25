import { fakeApi } from "@/config/api";
import { PostType } from "@/models/Posts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updatePost = async ({ id, post }: { id: number; post: PostType }) => {
  console.log("aaa", id);
  const res = await fakeApi.put(`/posts/${id}`, post);

  return res.data;
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
