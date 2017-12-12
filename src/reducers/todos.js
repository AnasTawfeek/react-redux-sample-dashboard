import {
    GET_TODOS_LOADING, GET_TODOS_SUCCESS, GET_TODOS_FAILURE,
    ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_FAILURE,
    EDIT_TODO_LOADING, EDIT_TODO_SUCCESS, EDIT_TODO_FAILURE,
    DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE
} from '../actions/todos';


const INITIAL_STATE = {
    items: [],
    loading: false,
    adding: false,
    error: null,
    errorAdding: null
}

export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        // Get all todos
        case GET_TODOS_LOADING:
            return {...currentState, loading: true};
        case GET_TODOS_SUCCESS:
            return {...currentState, loading: false, items: action.todos};
        case GET_TODOS_FAILURE:
            return {...currentState, loading: false, error: action.error};

        // Add todo
        case ADD_TODO_LOADING:
            return {...currentState, adding: true};
        case ADD_TODO_SUCCESS:
            return {...currentState, adding: false, items: [...currentState.items, action.todo]};
        case ADD_TODO_FAILURE:
            return {...currentState, adding: false, errorAdding: action.error};

        // Edit single todo
        case EDIT_TODO_LOADING:
            var newItems = currentState.items.map(item => {
                if (item.id == action.id) item.loading = true;
                return item;
            })
            return {...currentState, items: newItems}
        case EDIT_TODO_SUCCESS:
            var newItems = currentState.items.map(item => {
                if (item.id == action.todo.id) {item = action.todo}
                return item;
            })
            return {...currentState, items: newItems}
        case EDIT_TODO_SUCCESS:
            var newItems = currentState.items.map(item => {
                if (item.id == action.id) {item.loading = false; item.error = action.error}
                return item;
            })
            return {...currentState, items: newItems}

        // Delete single todo
        case DELETE_TODO_LOADING:
            var newItems = currentState.items.map(item => {
                if (item.id == action.id) item.loading = true;
                return item;
            })
            return {...currentState, items: newItems}
        case DELETE_TODO_SUCCESS:
            var newItems = currentState.items.filter(item => {
                return item.id !== action.id
            })
            return {...currentState, items: newItems}
        case DELETE_TODO_FAILURE:
            var newItems = currentState.items.map(item => {
                if (item.id == action.id) {item.loading = false; item.error = action.error}
                return item;
            })
            return {...currentState, items: newItems}
        default:
            return currentState;
    }
}
