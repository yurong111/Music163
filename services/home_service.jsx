import axios from 'axios';

export function searchApi(params) {
    return axios({
        method: 'GET',
        url: DATAHOST+'/search',
        params,
    });
}

export function getArtistByIdApi(params) {
    return axios({
        method: 'GET',
        url: DATAHOST+'/artists',
        params,
    });
}

