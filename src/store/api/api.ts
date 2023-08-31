import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IGames } from 'types/games.types'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://free-to-play-games-database.p.rapidapi.com/api',
        headers: {
            'X-RapidAPI-Key': 'abd852e5abmshe673dffedbbf3b3p12aa4fjsna06abda930e4',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }),
    
    endpoints: (builder) => ({
        getGames: builder.query<IGames[], null>({
            query: () => `/games`,
            extraOptions: {
                maxRetries: 3
            }
        }),
    }),
})

export const { useGetGamesQuery } = api