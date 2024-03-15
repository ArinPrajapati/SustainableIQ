import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newApi = createApi({
  reducerPath: "newApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/api/news",
  }),
  tagTypes: ["News"],
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["News"],
    }),
  }),
});

export const { useGetAllNewsQuery } = newApi;

export default newApi;
