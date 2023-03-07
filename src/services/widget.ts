import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IWidget } from '../interface/IWidget';

export const widgetApi = createApi({
    reducerPath: 'widgetApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['Widgets'],
    endpoints: (builder) => ({
        getWidgets: builder.query<IWidget[], string>({
            query: () => `/widgets`,
            providesTags: ['Widgets'],
        }),
    }),
});


export const {useGetWidgetsQuery} = widgetApi;