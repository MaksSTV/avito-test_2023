import { useTypedSelector } from "./useTypedSelector"

export const useGames = () => {
    const { gamesOptions } = useTypedSelector(state => state)

    return { gamesOptions }
}