
// import objectAssign from 'object-assign';

export default function createReducer (state = 0, action){

    switch (action.type) {
        case 'SEARCH_PENDING':
            return Object.assign({}, state, {
                SEARCH: null,
                searchResult: null
            })
            break;
        case 'SEARCH_SUCCESS':

            const oldData = state.searchResult || [];
            const newData = oldData.concat(action.payload.data)
            // const newData = [...(state.data || []), ...(action.payload.data)]

            return Object.assign({}, state, {
                SEARCH: true,
                searchResult: newData
            })
            break;
        case 'SEARCH_ERROR':
            return Object.assign({}, state, {
                SEARCH: false,
                searchResult: action.payload.data
            })
            break;


        case 'GET_ARTIST_BY_ID_PENDING':
            return Object.assign({}, state, {
                getArtistByIdResult: null
            })
            break;
        case 'GET_ARTIST_BY_ID_SUCCESS':
            return Object.assign({}, state, {
                getArtistByIdResult: action.payload.data
            })
            break;
        case 'GET_ARTIST_BY_ID_ERROR':
            return Object.assign({}, state, {
                getArtistByIdResult: action.payload.data
            })
            break;

        default:
            return Object.assign({}, state, {
                data: null,
            })
    }
}