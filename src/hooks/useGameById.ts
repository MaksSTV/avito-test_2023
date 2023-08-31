import { useTypedSelector } from "./useTypedSelector"

export const useGameById = () => {
    const { game } = useTypedSelector(state => state)

    return {game}
}