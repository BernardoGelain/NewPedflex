import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart/cartReducer';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const persistConfig = {
  key: 'cart', //chave principal para persistencia do estado
  storage, // Configuração do armazenamento (neste caso, localStorage)
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer, //reducer para o carrinho
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ações ignoradas durante a verificação de serialização(Não sei o que é)
      },
    }),
});

//Criação do persistor usado em App
//export type AppDispatch = typeof store.dispatch;
//export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
