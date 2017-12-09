import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    /**
     * This is sample reducer because creating store
     * without any reducers will cause error.
     */
    sample: (store = {bar: 'foo'}, action) => store
})

export default rootReducer;
