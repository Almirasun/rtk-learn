import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from '../favorites/favorites.slice'
import {api} from './api/api'

const reducers = combineReducers({
    favorites: favoritesReducer,
    [api.reducerPath]: api.reducer,
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export const { useGetRecipesQuery } = api