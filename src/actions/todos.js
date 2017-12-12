import Axios from 'axios';
import { todosApi, editTodoApi } from '../apiConfig';

/**
 * Action Types
 */
// Get all todos
export const GET_TODOS_LOADING = 'GET_TODOS_LOADING';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

// Add todo
export const ADD_TODO_LOADING = 'ADD_TODO_LOADING';
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

// Edit single todo
export const EDIT_TODO_LOADING = 'EDIT_TODO_LOADING';
export const EDIT_TODO = 'EDIT_TODO';
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS';
export const EDIT_TODO_FAILURE = 'EDIT_TODO_FAILURE';

// Delete single todo
export const DELETE_TODO_LOADING = 'DELETE_TODO_LOADING';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

/**
 * Action Creators
 */
// Get all todos
export const getTodosLoading = () => {
    return {
        type: GET_TODOS_LOADING
    }
}
export const getTodos = () => {
    const payload = Axios.get(todosApi);
    return {
        type: GET_TODOS,
        payload
    }
}
export const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        todos
    }
}
export const getTodosFailure = (error) => {
    return {
        type: GET_TODOS_FAILURE,
        error
    }
}

// Add todo
export const addTodoLoading = () => {
    return {
        type: ADD_TODO_LOADING
    }
}
export const addTodo = (content) => {
    const payload = Axios.post(todosApi, {
        content,
        complete: false
    });
    return {
        type: ADD_TODO,
        payload
    }
}
export const addTodoSuccess = (todo) => {
    return {
        type: ADD_TODO_SUCCESS,
        todo
    }
}
export const addTodoFailure = (error) => {
    return {
        type: ADD_TODO_FAILURE,
        error
    }
}

// Edit single todo
export const editTodoLoading = (id) => {
    return {
        type: EDIT_TODO_LOADING,
        id
    }
}
export const editTodo = (id, edit) => {
    const payload = Axios.patch(editTodoApi(id), edit);
    return {
        type: EDIT_TODO,
        payload
    }
}
export const editTodoSuccess = (todo) => {
    return {
        type: EDIT_TODO_SUCCESS,
        todo
    }
}
export const editTodoFailure = (data) => {
    return {
        type: EDIT_TODO_FAILURE,
        data
    }
}

// Delete single todo
export const deleteTodoLoading = (id) => {
    return {
        type: DELETE_TODO_LOADING,
        id
    }
}
export const deleteTodo = (id) => {
    const payload = Axios.delete(editTodoApi(id));
    return {
        type: DELETE_TODO,
        payload
    }
}
export const deleteTodoSuccess = (id) => {
    return {
        type: DELETE_TODO_SUCCESS,
        id
    }
}
export const deleteTodoFailure = (id) => {
    return {
        type: DELETE_TODO_FAILURE,
        id
    }
}
