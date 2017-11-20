
// import objectAssign from 'object-assign';

export default function createReducer (state = 0, action){

    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
                num: action.num+1,
                incrementStatus: true,
            })

        case 'DECREMENT':
            return Object.assign({}, state, {
                num: action.num-1,
                decrementStatus: true,
            })
        default:
            return Object.assign({}, state, {
                num: action.num,
            })
    }
}