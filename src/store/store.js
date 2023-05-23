import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer } from '../favorites/favorites.slice'

const reducers = combineReducers(reducer)

export const store = configureStore({
    reducer: reducers,
})