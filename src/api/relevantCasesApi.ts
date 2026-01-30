import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { parseCases } from "../utils/api";
import type { RelevantCasesResponse } from "../types/relativeCasesApi";

export const relevantCasesApi = createApi({
  reducerPath: 'relevantCasesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/'
  }),
  endpoints: (build) => ({
    getRelevantCases: build.query<RelevantCasesResponse, void>({
      query: () => "c/efc3-9f01-4431-8b58",
      transformResponse: (raw: RelevantCasesResponse): RelevantCasesResponse => {
        const { total, cases } = raw
        return { total, cases: parseCases(cases) }
      },
    }),
  })
})

export const { useGetRelevantCasesQuery } = relevantCasesApi;


