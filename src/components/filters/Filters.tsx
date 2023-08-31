import Filter from "./filter/Filter"
import { listOfGenre, listOfPlatform, sorting } from '../../data/data';
import './Filter.scss'

type Props = {
    filtersGenre: (value: string) => void,
    filtersPlatform: (value: string) => void,
    Sorting: (value: string) => void
}


function Filters({filtersGenre, filtersPlatform, Sorting}: Props){


    return(
        <div className="filters-and-sorting">
            <div className="filters">
                <Filter data={listOfGenre} title="Жанр" label="Genre" filtersFunc={filtersGenre}/>
                <Filter data={listOfPlatform} title="Платформа" label="Platformmm" filtersFunc={filtersPlatform}/>
            </div>
            <div className="sorting">
                <Filter data={sorting} title="Сортировать" label="SortingSortin" filtersFunc={Sorting}/>
            </div>
        </div>
    )
}

export default Filters