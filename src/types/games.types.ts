export interface IGames{
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    id: number
    platform: string
    publisher: string
    release_date: string
    short_description: string
    thumbnail: string
    title: string 
}


export interface IGameId{
    description: string
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    id: number
    minimum_system_requirements: {
        os: string
        processor: string
        graphics: string
        memory: string
        storage: string
    }
    platform: string
    publisher: string
    release_date: string
    screenshots: [
        {
            id: number
            image: string
        }
    ]
    short_description: string
    thumbnail: string
    title: string 
    status: string
}

export interface GameRecordTimeId {
    time: string
    gameById: IGameId
}

export interface all {
    allGenre: string,
    allPlatform: string,
    allSort: string
}