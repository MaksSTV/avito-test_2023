import { useGetGameByIdQuery } from "../../../store/api/game.api";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../InfoOfGame.scss"
import ContentGame from "../ContentGame/ContentGame";

type Props = {
    id: string
}

function InfoOfGameApi({ id }: Props) {

    const navigate = useNavigate()

    const { data, isLoading, isSuccess } = useGetGameByIdQuery(id)

    useEffect(() => {
        if (isSuccess) {
            const time = String(Date.now())
            const testObject = { 'time': time, 'gameById': data };
            localStorage.setItem('game', JSON.stringify(testObject));
        }
    }, [isSuccess])

    return (
        <>{
            isLoading ? (<div className="container"><CircularProgress /></div>)
                : isSuccess
                    ? (
                        <ContentGame data={data} />
                    )
                    : (<>
                        <Button variant="outlined" onClick={() => navigate(-1)}>Назад</Button>
                        <Alert severity="error" variant="filled" ><AlertTitle>Ошибка</AlertTitle>
                            Такой игры нет</Alert>
                    </>
                    )
        }
        </>
    );
}

export default InfoOfGameApi;