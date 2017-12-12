import { connect } from 'react-redux';
import Todos from '../components/Todos';
import {
    getTodosLoading, getTodos, getTodosSuccess, getTodosFailure,
    addTodoLoading, addTodo, addTodoSuccess, addTodoFailure,
    editTodoLoading, editTodo, editTodoSuccess, editTodoFailure,
    deleteTodoLoading, deleteTodo, deleteTodoSuccess, deleteTodoFailure
} from '../actions/todos';

const mapStateToProps = (state) => {
    return {
        todos: state.todos.items,
        loading: state.todos.loading,
        adding: state.todos.adding,
        error: state.todos.error,
        errorAdding: state.todos.errorAdding
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodos: () => {
            dispatch(getTodosLoading());
            setTimeout(() => {
                dispatch(getTodos()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getTodosSuccess(response.payload.data));
                    }else{
                        dispatch(getTodosFailure(response.payload.message));
                    }
                })
            }, 2000)
        },
        addTodo: (content, callback) => {
            dispatch(addTodoLoading());
            setTimeout(() => {
                dispatch(addTodo(content)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(addTodoSuccess(response.payload.data));
                        callback();
                    }else{
                        dispatch(addTodoFailure(response.payload.message));
                    }
                })
            }, 2000)
        },
        editTodo: (id, type, value) => {
            dispatch(editTodoLoading(id));
            setTimeout(() => {
                dispatch(editTodo(id, {[type]: value})).then(response => {
                    if(response.payload.status < 400){
                        dispatch(editTodoSuccess(response.payload.data));
                    }else{
                        dispatch(editTodoFailure(response.payload.message));
                    }
                })
            }, 2000)
        },
        deleteTodo: (id) => {
            dispatch(deleteTodoLoading(id));
            setTimeout(() => {
                dispatch(deleteTodo(id)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(deleteTodoSuccess(id));
                    }else{
                        dispatch(deleteTodoFailure(id));
                    }
                })
            }, 2000)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
