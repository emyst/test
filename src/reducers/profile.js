import {REPOS_FAILED, REPOS_REQUEST, REPOS_RESPONSE} from "../actions/repos";

export const initialState = {
    name: 'Василий',
    surname: 'Реактов',
    age: 27,
    reposList: [],
    fetching: false,
    isConnectionError: false

}
export default  (state = initialState, action)=> {
    switch (action.type) {
        case REPOS_REQUEST:
            return { ...state, fetching: true }
        case REPOS_RESPONSE:
            return { ...state, reposList: action.payload, fetching: false }
        case REPOS_FAILED:
            return { ...state, isConnectionError: true, fetching: false }
        default:
            return state;
    }
}
