import { fakeApi } from "@/config/api";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const deletePost = async (id: number) => {
  const res = await fakeApi.delete(`/posts/${id}`);

  return res.data;
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
