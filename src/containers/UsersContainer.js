import { connect } from 'react-redux';
import Users from '../components/Users';
import { getUsersLoading, getUsers, getUsersSuccess, getUsersFailure } from '../actions/users';

const mapStateToProps = (state) => {
    return {
        users: state.users.items,
        loading: state.users.loading,
        error: state.users.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(getUsersLoading());
            setTimeout(() => {
                dispatch(getUsers()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getUsersSuccess(response.payload.data));
                    }else{
                        dispatch(getUsersFailure(response.payload.message));
                    }
                })
            }, 2000)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
