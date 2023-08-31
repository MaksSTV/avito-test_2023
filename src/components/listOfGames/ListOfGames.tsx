import './ListOfGames.scss'
import Grid from '@mui/material/Grid';
import ItemOfList from '@components/itemOfList/ItemOfList';
import Pagination from '@mui/material/Pagination';
import Filters from '@components/filters/Filters.tsx';
import { useEffect, useState } from 'react';
import getDataForCurPage from '../../utils/getDataForCurPage.ts';
import { IGames, all } from 'types/games.types.ts';
import { useGetGamesQuery } from '../../store/api/api.ts';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import Alert from '@mui/material/Alert/Alert';
import AlertTitle from '@mui/material/AlertTitle/AlertTitle';
import { getUrl } from '../../utils/getNewUrl.ts';
import { useActions } from '../../hooks/useActions.ts';
import { useGames } from '../../hooks/useGames.ts';


function ListOfGames() {

    const [games, setGames] = useState<IGames[]>()
    const [isEmptyList, setIsEmptyList] = useState(false)
    const [paginationData, setPaginationData] = useState<IGames[]>()

    const { isLoading, data, error } = useGetGamesQuery(null)

    const { gamesOptions } = useGames()
    const { setPage, setGenre, setPlatform, setSort, setAll } = useActions()


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        event.preventDefault()
        setPage(value);
        window.scrollTo(0, 100);
    };

    useEffect(() => {
        setGames(data)
    }, [data])


    useEffect(() => {
        if (games != undefined) {
            if (Array.isArray(games)) {
                setIsEmptyList(false)
                setPaginationData(getDataForCurPage(gamesOptions.page, games))
            }
            else {
                setIsEmptyList(true)
            }
        }

    }, [gamesOptions.page, games])

    useEffect(() => {

        const fetchData = async (genre: string, platform: string, sort: string) => {
            const { newUrl, options } = getUrl(genre, platform, sort)

            let response: Response
            let result: any
            try {
                response = await fetch(newUrl, options);
                result = await response.json();
            }
            catch (e) {
                try {
                    response = await fetch(newUrl, options);
                    result = await response.json();
                }
                catch (e) {
                    try {
                        response = await fetch(newUrl, options);
                        result = await response.json();
                    }
                    catch(e){

                    }
                }
            }


            if (!(gamesOptions.all.allGenre == genre && gamesOptions.all.allPlatform == platform && gamesOptions.all.allSort == sort)) {
                setPage(1)
            }

            setGames(result)
            const temp: all = {
                allGenre: genre,
                allPlatform: platform,
                allSort: sort
            }
            setAll(temp)
        }

        if (!(gamesOptions.genre === '' && gamesOptions.platform === '' && gamesOptions.sort === '')) {
            fetchData(gamesOptions.genre, gamesOptions.platform, gamesOptions.sort);
        }

    }, [gamesOptions.genre, gamesOptions.platform, gamesOptions.sort])

    const handleChangeGenre = (value: string) => {
        setGenre(value);
    };

    const handleChangePlatform = (value: string) => {
        setPlatform(value);
    };

    const handleChangeSort = (value: string) => {
        setSort(value);
    };

    return (
        <div className="games">
            {error ? (
                <><Alert severity="error" variant="filled"><AlertTitle>Ошибка</AlertTitle>
                    При загрузке данных что-то пошло не так!</Alert></>
            ) : isLoading ? (
                <><CircularProgress /></>
            ) : (games && !isEmptyList) ? (
                <>
                    <div className="info">
                        {(gamesOptions.genre === '' && gamesOptions.platform === '' && gamesOptions.sort === '') ? null : (
                            <>Выборка:
                                {
                                    gamesOptions.genre !== '' ? <> жанр - {gamesOptions.genre};</> : null
                                }
                                {
                                    gamesOptions.platform !== '' ? <> платформа - {gamesOptions.platform};</> : null
                                }
                                {
                                    gamesOptions.sort !== '' ? <> сортировка - {gamesOptions.sort};</> : null
                                }</>
                        )}

                    </div>
                    <Filters filtersGenre={handleChangeGenre} filtersPlatform={handleChangePlatform} Sorting={handleChangeSort} />
                    <Grid
                        container spacing={{ xs: 2, md: 3 }}
                        justifyContent="center"
                        alignItems="center"
                        mb={3}
                    >
                        {paginationData?.map((value, index) => (
                            <ItemOfList value={value} index={index} key={index} />
                        ))}
                    </Grid>
                    <Pagination
                        count={Math.ceil(games.length / 16)}
                        page={gamesOptions.page}
                        siblingCount={0}
                        color='primary'
                        onChange={handleChange}
                        sx={{ "& .MuiPaginationItem-root": { color: "#fff" } }}
                    />
                </>
            ) : <><Filters filtersGenre={handleChangeGenre} filtersPlatform={handleChangePlatform} Sorting={handleChangeSort} />
                <div className="error">
                    <Alert severity="error" variant="filled" ><AlertTitle>Ошибка</AlertTitle>
                        Таких игр нет</Alert>
                </div>

                <Pagination
                    count={0}
                    page={0}
                    siblingCount={0}
                    color='primary'
                    onChange={handleChange}
                    sx={{ "& .MuiPaginationItem-root": { color: "#fff" } }}
                /></>}

        </div>
    )
}

export default ListOfGames
