import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postCommentApi = createApi({
  reducerPath: "postCommentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/api/forumComment/",
  }),
  tagTypes: ["PostComment"],
  endpoints: (builder) => ({
    getAllPostComments: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["PostComment"],
    }),
    createPostComment: builder.mutation({
      query: (comment: {
        name: string;
        postId: string;
        content: string;
        title: string;
      }) => ({
        url: "add",
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["PostComment"],
    }),
    deletePostComment: builder.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PostComment"],
    }),
    getCommentsPostId: builder.query({
      query: (id) => ({
        url: `getComments/${id}`,
        method: "GET",
      }),
      providesTags: ["PostComment"],
    }),
  }),
});

export const {
  useCreatePostCommentMutation,
  useGetAllPostCommentsQuery,
  useGetCommentsPostIdQuery,
  useDeletePostCommentMutation,
} = postCommentApi;
