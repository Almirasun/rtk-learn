import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const API_URL = 'http://localhost:4200/recipes'

export const api = createApi({
    reducerPath: 'api',
    // tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: builder => ({
        getRecipes: builder.query({
            query: () => '/'
        }),
        createRecipe: builder.mutation({
            query: (recipe) => ({
                body: recipe,
                url: '/',
                method: 'POST'
            })
        })
    })
})
