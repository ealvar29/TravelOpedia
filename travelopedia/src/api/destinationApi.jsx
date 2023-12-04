import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationAPI = createApi({
  reducerPath: "apiDestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
  endpoints: (builder) => ({
    // Query -> GET
    // Mutation -> POST/PUT/DELETE
    getAllDestination: builder.query({
      query: () => "destination",
    }),
  }),
});

export const { useGetAllDestinationQuery } = destinationAPI;
