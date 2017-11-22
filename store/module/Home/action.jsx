const axios = require('axios');


export function searchAction(keywords, type=100) {//歌手

    return (dispatch) => {
        dispatch({ type: 'SEARCH_PENDING' })

        const request = axios({
            method: 'GET',
            url: `http://localhost:3000/search`,
            params: {
                type,
                keywords,
            }
        });

        return request.then(
            response => {
                dispatch({ type: 'SEARCH_SUCCESS', payload: response })
            },
            err => {
                dispatch({ type: 'SEARCH_ERROR', payload: err })
            }
        );
    }
}



export function getArtistByIdAction(id) {
    return (dispatch) => {
        dispatch({ type: 'GET_ARTIST_BY_ID_PENDING' })

        const request = axios({
            method: 'GET',
            url: `localhost:3000/artists`,
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
}

