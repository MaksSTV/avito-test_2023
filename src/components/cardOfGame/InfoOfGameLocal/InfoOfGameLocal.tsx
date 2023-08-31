import { GameRecordTimeId } from "types/games.types";
import ContentGame from "../ContentGame/ContentGame";

type Props = {
    data: GameRecordTimeId
}

function InfoOfGameLocal({ data }: Props) {

    return (
        <ContentGame data={data.gameById}/>
    );
}

export default InfoOfGameLocal;