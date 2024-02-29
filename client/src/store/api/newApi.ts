import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newApi = createApi({
  reducerPath: "newApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://newsapi.org/v2/everything?q=environment&apiKey=" +
      import.meta.env.VITE_NEWS_API_KEY,
  }),
  tagTypes: ["New"],
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["New"],
    }),
  }),
});

export const { useGetAllNewsQuery } = newApi;

export default newApi;
