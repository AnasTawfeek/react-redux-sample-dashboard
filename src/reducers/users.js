import {
    GET_USERS_LOADING, GET_USERS_SUCCESS, GET_USERS_FAILURE,
    GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_FAILURE
} from '../actions/users';

const INITIAL_STATE = {
    items: [],
    loading: false,
    error: null
}

export default function(currentState = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USERS_LOADING:
            return {...currentState, loading: true};
        case GET_USERS_SUCCESS:
            return {...currentState, items: action.users, loading: false};
        case GET_USERS_FAILURE:
            return {...currentState, error: action.error, loading: false};
        case GET_USER_LOADING:
            return {...currentState, loading: true};
        case GET_USER_SUCCESS:
            return {...currentState, items: [...currentState.items, action.user], loading: false};
        case GET_USER_FAILURE:
            return {...currentState, error: action.error, loading: false};
        default:
            return currentState;
    }
}
