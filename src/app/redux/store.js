import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from '../api/movieApi'
import movieSlice from './movieSlice'


export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    
    movieSlice: movieSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
})