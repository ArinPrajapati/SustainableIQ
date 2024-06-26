import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { imageApi } from "./api/imageApi";
import { postApi } from "./api/postApi";
import { newApi } from "./api/newApi";
import { postCommentApi } from "./api/postCommet";
import currentPageSlice from "./feature/currentPageSlice";

export const store = configureStore({
  reducer: {
    currentPage: currentPageSlice,

    [imageApi.reducerPath]: imageApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [newApi.reducerPath]: newApi.reducer,
    [postCommentApi.reducerPath]: postCommentApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      imageApi.middleware,
      postApi.middleware,
      newApi.middleware,
      postCommentApi.middleware,
    ]);
  },
});

setupListeners(store.dispatch);
