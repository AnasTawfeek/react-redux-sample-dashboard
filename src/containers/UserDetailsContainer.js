import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';
import { getUserLoading, getUser, getUserSuccess, getUserFailure } from '../actions/users';

const mapStateToProps = (state) => {
    return {
        users: state.users.items,
        loading: state.users.loading,
        error: state.users.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (id) => {
            dispatch(getUserLoading());
            setTimeout(() => {
                dispatch(getUser(id)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getUserSuccess(response.payload.data[0]));
                    }else{
                        dispatch(getUserFailure(response.payload.message));
                    }
                })
            }, 2000)
        }
    }
}

/**
 * For more info about mergeProps visit the documentation
 * https://github.com/reactjs/react-redux/blob/master/docs/api.md
 */
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    console.log(stateProps);
    return {
        // Find the user with the id passed from the url by the router
        user: stateProps.users.find(user => user.id.value == ownProps.match.params.id),
        ...stateProps,
        ...dispatchProps,
        ...ownProps
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(UserDetails);
