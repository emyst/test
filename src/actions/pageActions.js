export const USERS_REQUEST  =  'USERS_REQUEST';
export const USERS_RESPONSE =  'USERS_RESPONSE';
export const USERS_FAILED   =  'USERS_FAILED';

export const ROWS_PER_PAGE=5;

export const loadUsers = (page) => (dispatch, getState) => {
    dispatch({type: USERS_REQUEST});
    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => dispatch({type: USERS_RESPONSE, payload: data.slice((page-1)*ROWS_PER_PAGE,page*ROWS_PER_PAGE)}))
        .catch(error=> dispatch({type: USERS_FAILED, payload: {}}));

}