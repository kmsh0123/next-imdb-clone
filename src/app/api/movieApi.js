import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const movieApi = createApi({
    reducerPath:"movieApi",
    baseQuery:fetchBaseQuery({baseUrl: "https://api.themoviedb.org/3"}),
    tagTypes:["movieApi"],

    endpoints:(builder) => ({
        getMovies:(builder).query({
            query:(user) => ({
                url : `/trending/movie/day?api_key=bb3273d8084d88f37b5d3bc08d2b1364&language=en-US`,
                method: "GET",
                body : user
            }),
            providesTags:["movieApi"]
        }),
        getDetails:(builder).query({
            query:({id}) => ({
                url : `/movie/${id}?api_key=bb3273d8084d88f37b5d3bc08d2b1364`,
                method: "GET",
            }),
            providesTags:["movieApi"]
        }),
    })
})

export const {useGetMoviesQuery,useGetDetailsQuery} = movieApi;