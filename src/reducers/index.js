import { combineReducers } from 'redux'
import userlist from "./userslist";

const appReducer = combineReducers({
    userlist
});

const rootReducer = (state, action) => {
    if (action.type === 'SIGN_OUT_SUCCESS') {
        state = undefined
    }

    return appReducer(state, action)
}

export default rootReducer;
