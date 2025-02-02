import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Cards'],
  endpoints: (builder) => ({
    getCards: builder.query({
      query: () => '/cards',
      providesTags: ['Cards'],
    }),
    addCard: builder.mutation({
      query: (newCard) => ({
        url: '/cards',
        method: 'POST',
        body: newCard,
      }),
      invalidatesTags: ['Cards'],
    }),
    deleteCards: builder.mutation({
      query: (ids) => ({
        url: '/cards',
        method: 'DELETE',
        body: ids,
      }),
      invalidatesTags: ['Cards'],
    }),
  }),
})

export const { useGetCardsQuery, useAddCardMutation, useDeleteCardsMutation } =
  cardsApi
