
export default function apiMiddlewares(store) {
    return next => action=> {

        // let type = action.type;
        let dispatch = store.dispatch;

        if (!isPromise(action.payload)) {
            return next(action)
        }

        const { type, payload, meta, params = {} } = action;
        const { promise, data } = payload;

        next({
            type: `${type}_PENDING`,
            ...!!data ? {payload: data, params} : {},
            ...!!meta ? {meta} : {}
        });

        action.payload.promise =  action.payload.promise.then(
            response => {
                return dispatch({
                    type: `${type}_SUCCESS`,
                    payload: response
                })
            },
            err => {
                dispatch({
                    type: `${type}_ERROR`,
                    payload: err
                })
            }
        );

        return action;
    }
}

function isPromise(value){
    if (value !== null && typeof value === 'object') {
        return value.promise && typeof value.promise.then === 'function'
    }
}