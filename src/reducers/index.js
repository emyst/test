import { combineReducers } from 'redux'
import profile from "./profile";
import one from "./one";

const appReducer = combineReducers({
    one,
    profile
});

const rootReducer = (state, action) => {
    if (action.type === 'SIGN_OUT_SUCCESS') {
        state = undefined
    }

    return appReducer(state, action)
}

export default rootReducer;
