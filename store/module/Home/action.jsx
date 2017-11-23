// const axios = require('axios');
import axios from 'axios';

import {
    searchApi,
    getArtistByIdApi,
} from '../../../services/home_service';


export function searchAction(keywords, type=100) {//歌手
    return (dispatch) => {
        searchApi(dispatch, {
            keywords,
            type
        })
    }
}

export function getArtistByIdAction(id) {
    return (dispatch) => {
        getArtistByIdApi(dispatch, {
            id
        })
    }
}

/*export function getArtistByIdAction(id) {
    return (dispatch) => {
        dispatch({ type: 'GET_ARTIST_BY_ID_PENDING' })

        const request = axios({
            method: 'GET',
            url: `http://localhost:3000/artists`,
            params: {
                id,
            }
        });

        return request.then(
            response => {
                dispatch({ type: 'GET_ARTIST_BY_ID_SUCCESS', payload: response })
            },
            err => {
                dispatch({ type: 'GET_ARTIST_BY_ID_ERROR', payload: err })
            }
        );
    }
}*/

