import { IGameId } from "types/games.types";
import { api } from "./api";


export const gameApi = api.injectEndpoints({
    endpoints: builder => ({
        getGameById: builder.query<IGameId, string>({
            query: (id) => ({
                url: 'game?id='+id,
                extraOptions: {
                    maxRetries: 3
                }
            }),
        })
    })
})


export const {useGetGameByIdQuery} = gameApi