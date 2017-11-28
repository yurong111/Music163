
import {
    searchApi,
    getArtistByIdApi,
} from '../../../services/home_service';


export function searchAction(keywords, type=100) {//歌手
    return {
        type: 'SEARCH',
        payload: {
            promise: searchApi({keywords, type})
        },
    }
}


export function getArtistByIdAction(id) {
    return {
        type: 'GET_ARTIST_BY_ID',
        payload: {
            promise: getArtistByIdApi({id})
        },
    }
}



