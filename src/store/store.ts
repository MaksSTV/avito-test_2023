import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import { reducer as gameReducer } from './game/game.slice'
import { reducer as gamesReducer} from './games/games.slice'


const reducers = combineReducers({
  game: gameReducer,
  gamesOptions: gamesReducer,
  [api.reducerPath]: api.reducer,
})


export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})


export type RootState = ReturnType<typeof store.getState>