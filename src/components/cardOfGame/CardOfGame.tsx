import { useParams } from "react-router-dom";
import { GameRecordTimeId } from "types/games.types";
import InfoOfGameApi from "./InfoOfGameApi/InfoOfGameApi";
import InfoOfGameLocal from "./InfoOfGameLocal/InfoOfGameLocal";



function CardOfGame() {

    const { id } = useParams() as { id: string };

    const key = 'game'
    const item = localStorage.getItem(key) as string
    const value: GameRecordTimeId = JSON.parse(item)

    if(localStorage.getItem(key) == null){
        return (
            <InfoOfGameApi id={id}/>
        )
    }
    else if(localStorage.getItem(key) != null && value.gameById.id != Number(id)){
        return (
            <InfoOfGameApi id={id}/>
        )
    }
    else if(localStorage.getItem(key) != null && value.gameById.id === Number(id)){
        return (
            <InfoOfGameLocal data={value}/>
        )
    }

}

export default CardOfGame;