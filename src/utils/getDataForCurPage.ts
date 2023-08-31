import { IGames } from "types/games.types";

export default function getDataForCurPage(page: number, data: IGames[]) :IGames[] {

    let start = (page - 1) * 16
    let end = page * 16 > data.length ? data.length : page * 16

    return data.slice(start, end)
}
