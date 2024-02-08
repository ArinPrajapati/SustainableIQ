import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/api/forumPost/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
    createPost: builder.mutation({
      query: (post) => ({
        url: "add",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),

    addLike: builder.mutation({
      query: (id) => ({
        url: `addLike/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Post"],
    }),
    addView: builder.mutation({
      query: (id) => ({
        url: `addView/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useAddLikeMutation,
  useAddViewMutation,
} = postApi;
