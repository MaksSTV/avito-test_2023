const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

type obj = { 
    newUrl: string; 
    options: { 
        method: string; 
        headers: { 
            'X-RapidAPI-Key': string; 
            'X-RapidAPI-Host': string; 
        }; 
    }; 
}

 /**
     * platform=browser&category=mmorpg&sort-by=release-date
     */

export function getUrl(genre: string, platform: string, sort: string): obj{

    let newUrl = url

    if(genre === '' && platform === '' && sort != ''){
        newUrl += `sort-by=${sort}`
    }
    if(genre === '' && platform != '' && sort === ''){
        newUrl += `platform=${platform}`
    }
    if(genre != '' && platform === '' && sort === ''){
        newUrl += `category=${genre}`
    }
    if(genre != '' && platform != '' && sort != ''){
        newUrl += `platform=${platform}&category=${genre}&sort-by=${sort}`
    }
    if(genre === '' && platform != '' && sort != ''){
        newUrl += `platform=${platform}&sort-by=${sort}`
    }
    if(genre != '' && platform === '' && sort != ''){
        newUrl += `category=${genre}&sort-by=${sort}`
    }
    if(genre != '' && platform != '' && sort === ''){
        newUrl += `platform=${platform}&category=${genre}`
    }

    return {newUrl, options}
}