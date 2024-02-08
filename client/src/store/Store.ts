import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { imageApi } from "./api/imageApi";
import { postApi } from "./api/postApi";
import currentPageSlice from "./feature/currentPageSlice";

export const store = configureStore({
  reducer: {
    currentPage: currentPageSlice,
    
    [imageApi.reducerPath]: imageApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat([imageApi.middleware, postApi.middleware]);
  },
});

setupListeners(store.dispatch);
