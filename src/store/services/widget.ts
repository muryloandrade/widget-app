import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IWidget } from "../../interface/IWidget";

export const widgetApi = createApi({
  reducerPath: "widgetApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["Widgets"],
  endpoints: (builder) => ({
    getWidgets: builder.query<IWidget[], string>({
      query: () => `/layoutWidget`,
      providesTags: ["Widgets"],
    }),
    postWidget: builder.mutation<IWidget[], IWidget[]>({
      query: (widget) => ({
        url: `/layoutWidget`,
        method: "POST",
        body: widget,
      }),
      invalidatesTags: ["Widgets"],
    }),
  }),
});

export const { useGetWidgetsQuery, usePostWidgetMutation } = widgetApi;
