import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { all } from 'types/games.types'


export const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        page: 1,
        genre: '',
        platform: '',
        sort: '',
        all: {
            allGenre: '',
            allPlatform: '',
            allSort: ''
        }
    },
    reducers: {
        setPage: (state, { payload: page }: PayloadAction<number>) => {
            state.page = page
        },
        setGenre: (state, { payload: genre }: PayloadAction<string>) => {
            state.genre = genre
        },
        setPlatform: (state, { payload: platform }: PayloadAction<string>) => {
            state.platform = platform
        },
        setSort: (state, { payload: sort }: PayloadAction<string>) => {
            state.sort = sort
        },
        setAll: (state, { payload: all }: PayloadAction<all>) => {
            state.all.allGenre = all.allGenre
            state.all.allPlatform = all.allPlatform
            state.all.allSort = all.allSort
        }
    }
})

export const { actions, reducer } = gamesSlice