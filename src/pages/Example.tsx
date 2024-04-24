import {
  useCreatePost,
  useDeletePost,
  useFetchPost,
  useFetchPosts,
  useUpdatePost,
} from "@/hooks/usePostsData";
import { useTheme } from "@/hooks/useTheme";
import { removeTest, test } from "@/lib/redux/reducers/cartReducer";
import { RootState } from "@/models/RootState";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Example() {
  const { toggleTheme } = useTheme();

  const dispatch: any = useDispatch();

  const handleAddTest = () => {
    const testDispatch = 1;

    dispatch(test({ testDispatch }));
  };
  const handleRemoveTest = () => {
    dispatch(removeTest({}));
  };

  const reduxValue = useSelector((state: RootState) => state.cart.testState);

  const logValue = () => {
    console.log(reduxValue);
  };

  //----------------------------//

  const [id, setId] = React.useState<number | null>(null);

  const { isPostsLoading, postsData } = useFetchPosts();

  const { postData } = useFetchPost(id);

  const { createPost, isPending } = useCreatePost();

  const { deletePost } = useDeletePost();

  const { updatePost } = useUpdatePost();

  const handleCreatePost = React.useCallback(() => {
    const post = {
      body: "adhusad",
      id: 1,
      title: "aasdas",
      userId: 1,
    };

    createPost(post, {
      onSuccess: () => {
        alert("criado com sucesso");
      },
      onError: () => {
        alert("erro ao criar");
      },
    });
  }, [createPost]);

  const handleDeletePost = React.useCallback(
    (id: number) => {
      deletePost(id);
    },
    [deletePost]
  );

  const handleUpdatePost = React.useCallback(
    (id: number) => {
      const post = {
        body: "adhusad",
        id: 1,
        title: "aasdas",
        userId: 1,
      };

      updatePost(
        { id: 0, post },
        {
          onSuccess: () => {
            alert("update com sucesso");
          },
          onError: (err) => {
            console.log(err.response.status);
            alert("erro ao update " + err);
          },
        }
      );
    },
    [updatePost]
  );

  console.log("loading", isPostsLoading);

  console.log("pending", isPending);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Example</h1>

      <button onClick={toggleTheme}>change Theme</button>
      <button onClick={handleAddTest}>Add Test Redux</button>
      <button onClick={handleRemoveTest}>Remove Test Reduxe</button>
      <button onClick={logValue}>Print in console Redux state value</button>

      <div style={{ marginBottom: "30px" }} />
      <button onClick={handleCreatePost}>Create post</button>

      <button
        onClick={() => setId(Number(Number(Math.random()).toFixed(1)) * 10)}
      >
        Fetch post
      </button>

      <button
        onClick={() =>
          handleDeletePost(Number(Number(Math.random()).toFixed(1)) * 10)
        }
      >
        Delete post
      </button>

      <button
        onClick={() =>
          handleUpdatePost(Number(Number(Math.random()).toFixed(1)) * 10)
        }
      >
        Update post
      </button>

      <ul style={{ listStyleType: "circle", listStyle: "inside" }}>
        <li>
          <b>{postData?.title ?? ""}</b>
        </li>
        {postsData?.map((it) => (
          <li>{it.title}</li>
        ))}
      </ul>
    </div>
  );
}
