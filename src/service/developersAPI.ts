import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Item } from '../interfaces/interfaces';
import { filterData } from '../helpers';

export const developersAPI = createApi({
	reducerPath: 'itemsAPI',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL_API }),
	tagTypes: ['Items'],
	endpoints: (build) => ({
		fetchAllItems: build.query({
			query: () => ({
				url: '',
			}),
			transformResponse(response: Item[]) {
				return filterData(response);
			},
		}),
	}),
});

export const { useLazyFetchAllItemsQuery } = developersAPI;
