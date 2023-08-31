import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { actions as gameActions } from "../store/game/game.slice"
import { actions as gamesActions} from "../store/games/games.slice"

const rootActions = {
    ...gameActions,
    ...gamesActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => 
        bindActionCreators(rootActions, dispatch)
    , [dispatch])
}