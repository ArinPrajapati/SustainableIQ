import { CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

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
      query: (comment) => ({
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
    getCommetsbyPostId: builder.query({
      query: (id) => ({
        url: `getComments/${id}`,
        method: "GET",
      }),
      providesTags: ["PostComment"],
    }),
  }),
});

export const {
  useGetAllPostCommentsQuery,
  useCreatePostCommentMutation,
  useDeletePostCommentMutation,
} = postCommentApi;
