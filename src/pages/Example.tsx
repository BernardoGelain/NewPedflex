import { useCreatePost, useFetchPosts } from "@/hooks/usePostsData";
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

  const { isPostsLoading, postsData } = useFetchPosts();

  const { createPost, isPending } = useCreatePost();

  const handleCreatePost = React.useCallback(() => {
    const post = {
      body: "adhusad",
      id: 1,
      title: "aasdas",
      userId: 1,
    };

    createPost(post);
  }, [createPost]);

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

      <ul style={{ listStyleType: "circle", listStyle: "inside" }}>
        {postsData?.map((it) => (
          <li>{it.title}</li>
        ))}
      </ul>
    </div>
  );
}
