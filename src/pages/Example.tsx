import React from 'react';
import {
  useCreatePost,
  useDeletePost,
  useFetchPost,
  useFetchPosts,
  useUpdatePost,
} from '@/services/posts';

import { useTheme } from '@/hooks/useTheme';
import { removeFromCart, addToCart } from '@/lib/redux/cart/cartReducer';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';
import { TextInput } from '@/components/TextInput/TextInput';
import { useNotification } from '@/hooks/useToast';

export default function Example() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleAddTest = () => {
    const testDispatch = 1;

    dispatch(addToCart({ testDispatch }));
  };
  const handleRemoveTest = () => {
    dispatch(removeFromCart({}));
  };

  const reduxValue = useAppSelector((state) => state.cart.produtosCarrinho);

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
        snackbar({ title: 'criado com sucesso' });
      },
      onError: () => {
        alert({ title: 'erro ao criar' });
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
            snackbar({ title: 'update com sucesso' });
          },
          onError: (err) => {
            console.log((err as AxiosError).response?.status);
            snackbar({ title: 'erro ao update ' + err });
          },
        }
      );
    },
    [updatePost]
  );

  const { snackbar, alert } = useNotification();

  const handleAlert = () => {
    alert({ title: 'Sim ou não', icon: 'question' }).then((result) => {
      console.log(result);
      if (result.isDismissed) {
        return snackbar({ title: 'não', icon: 'warning' });
      }
      return snackbar({ title: 'sim' });
    });
  };

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

      <button onClick={handleAlert}>Alert!</button>
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
