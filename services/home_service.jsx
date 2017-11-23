import axios from 'axios';

export function searchApi(dispatch, params) {
    get(dispatch, 'http://localhost:3000/search', 'SEARCH', params);
}
export function getArtistByIdApi(dispatch, params) {
    get(dispatch, 'http://localhost:3000/artists', 'GET_ARTIST_BY_ID', params);
}

function get(dispatch, url, type, params) {
    dispatch({ type: `${type}_PENDING` })

    const request = axios({
        method: 'GET',
        url: url,
        params
    });

    return request.then(
        response => {
            dispatch({ type: `${type}_SUCCESS`, payload: response })
        },
        err => {
            dispatch({ type: `${type}_ERROR`, payload: err })
        }
    );
}