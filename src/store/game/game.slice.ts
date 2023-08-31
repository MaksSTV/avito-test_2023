import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { IGameId } from 'types/games.types';




export const gameSlice = createSlice({
    name: 'gameById',
    initialState: <IGameId>{},
    reducers: {
        setGame: (state, {payload: game}: PayloadAction<IGameId>) => {
            state.description = game.description
            state.developer = game.developer
            state.freetogame_profile_url = game.freetogame_profile_url
            state.game_url = game.game_url
            state.genre = game.genre 
            state.id = game.id
            state.minimum_system_requirements = game.minimum_system_requirements
            state.platform = game.platform
            state.publisher = game.publisher
            state.release_date = game.release_date
            state.screenshots = game.screenshots
            state.short_description = game.short_description
            state.status = game.status
            state.thumbnail = game.thumbnail
            state.title = game.title
            
        }
    }
})

export const {actions, reducer} = gameSlice