import Axios from 'axios';
import { usersApi, userApi } from '../apiConfig';

/**
 * Action Types
 */
// Get all users
export const GET_USERS_LOADING = 'GET_USERS_LOADING';
export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

// Get user details
export const GET_USER_LOADING = 'GET_USER_LOADING';
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

/**
 * Action Creators
 */
// Get all users
export const getUsersLoading = () => {
    return {
        type: GET_USERS_LOADING
    }
}
export const getUsers = () => {
    const payload = Axios.get(usersApi);
    return {
        type: GET_USERS,
        payload
    }
}
export const getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        users
    }
}
export const getUsersFailure = (error) => {
    return {
        type: GET_USERS_FAILURE,
        error
    }
}

// Get user details
export const getUserLoading = () => {
    return {
        type: GET_USER_LOADING
    }
}
export const getUser = (id) => {
    console.log(id, userApi(id));
    const payload = Axios.get(userApi(id));
    return {
        type: GET_USER,
        payload
    }
}
export const getUserSuccess = (user) => {
    return {
        type: GET_USER_SUCCESS,
        user
    }
}
export const getUserFailure = (error) => {
    return {
        type: GET_USER_FAILURE,
        error
    }
}
