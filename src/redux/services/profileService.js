//External Lib Import
import { createApi } from "@reduxjs/toolkit/query/react";

//Internal Lib Import
import basefetchBaseQuery from "./baseQuery";

export const profileService = createApi({
  reducerPath: "profile",
  tagTypes: ["profile"],
  baseQuery: basefetchBaseQuery("profile"),
  endpoints: (builder) => ({
    profileDetails: builder.query({
      query: () => ({
        url: `profileDetails`,
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
    profileUpdate: builder.mutation({
      query: (postBody) => ({
        url: `profileUpdate`,
        method: "PATCH",
        body: postBody,
      }),
      providesTags: ["profile"],
    }),
  }),
});
export const { useProfileDetailsQuery, useProfileUpdateMutation } =
  profileService;
