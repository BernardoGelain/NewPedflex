import React from 'react';
import {
  useCreatePost,
  useDeletePost,
  useFetchPost,
  useFetchPosts,
  useUpdatePost,
} from '@/services/posts';

import { useTheme } from '@/hooks/useTheme';
import { removeTest, test } from '@/lib/redux/reducers/cartReducer';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';
import { TextInput } from '@/components/TextInput/TextInput';

export default function Example() {
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleAddTest = () => {
    const testDispatch = 1;

    dispatch(test({ testDispatch }));
  };
  const handleRemoveTest = () => {
    dispatch(removeTest({}));
  };

  const reduxValue = useAppSelector((state) => state.cart.testState);

  const logValue = () => {
    console.log(reduxValue);
  };

  //---------------------------------//

  const [id] = React.useState<number>();

  const { isPostsLoading, postsData, setFetchPostsFilters } = useFetchPosts({
    postId: 100,
  });

  const { postData } = useFetchPost(id);

  const { createPost, isPending } = useCreatePost();

  const { deletePost } = useDeletePost();

  const { updatePost } = useUpdatePost();

  const handleCreatePost = React.useCallback(() => {
    const post = {
      body: 'adhusad',
      id: 1,
      title: 'aasdas',
      userId: 1,
    };

    createPost(post, {
      onSuccess: () => {
        alert('criado com sucesso');
      },
      onError: () => {
        alert('erro ao criar');
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
        body: 'adhusad',
        id: 1,
        title: 'aasdas',
        userId: 1,
      };

      updatePost(
        { id, post },
        {
          onSuccess: () => {
            alert('update com sucesso');
          },
          onError: (err) => {
            console.log((err as AxiosError).response?.status);
            alert('erro ao update ' + err);
          },
        }
      );
    },
    [updatePost]
  );

  console.log('loading', isPostsLoading);

  console.log('pending', isPending);

  const [value, setValue] = React.useState('');
  console.log(value);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Example</h1>

      <div style={{ margin: '20px' }}>
        <TextInput mask="cpfCnpj" value={value} setValue={setValue} />
      </div>

      <button onClick={toggleTheme}>change Theme</button>
      <button onClick={handleAddTest}>Add Test Redux</button>
      <button onClick={handleRemoveTest}>Remove Test Reduxe</button>
      <button onClick={logValue}>Print in console Redux state value</button>
      <button onClick={() => navigate('/teste')}>navigate</button>

      <div style={{ marginBottom: '30px' }} />
      <button onClick={handleCreatePost}>Create post</button>

      <button
        onClick={() =>
          setFetchPostsFilters((current) => ({
            ...current,
            search: 'ahsudhsauydh',
          }))
        }
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

      <ul style={{ listStyleType: 'circle', listStyle: 'inside' }}>
        <li>
          <b>{postData?.title ?? ''}</b>
        </li>
        {postsData?.map((it) => (
          <li>{it.body}</li>
        ))}
      </ul>
    </div>
  );
}
