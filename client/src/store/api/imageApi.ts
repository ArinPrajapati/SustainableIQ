import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/image/",
  }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (image: File) => {
        const formData = new FormData();
        formData.append("file", image);
        return {
          url: "upload",
          method: "POST",
          body: formData,
          headers: {},
        };
      },
    }),
  }),
});

export const { useUploadImageMutation } = imageApi;
