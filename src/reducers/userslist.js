import {USERS_FAILED, USERS_REQUEST, USERS_RESPONSE } from "../actions/pageActions";

export const initialState = {
    list: [],
    fetching: false,
    isConnectionError: false,
    page: 1

}
export default  (state = initialState, action)=> {
    switch (action.type) {
        case USERS_REQUEST:
            return { ...state, fetching: true }
        case USERS_RESPONSE:
            return { ...state, list: action.payload, page: state.page + 1, fetching: false }
        case USERS_FAILED:
            return { ...state, isConnectionError: true, fetching: false }
        default:
            return state;
    }
}