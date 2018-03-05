import {normalize, schema} from 'normalizr';

export const USERS_REQUEST  =  'USERS_REQUEST';
export const USERS_RESPONSE =  'USERS_RESPONSE';
export const USERS_FAILED   =  'USERS_FAILED';
export const USER_STARRED = 'USER_STARRED';
export const USER_UNSTARRED = 'USER_UNSTARRED';

export const ROWS_PER_PAGE=5;

export const people =[
    {id: 11, login: "white",  avatar_url: "./images/93352ba3eb8143f031af35fe16e5a109.jpg"},
    {id: 22, login: "trello", avatar_url: "./images/93352ba3eb8143f031af35fe16e5a109.jpg"},
    {id: 33, login: "joye", avatar_url: "../images/93352ba3eb8143f031af35fe16e5a109.jpg"},
    {id: 44, login: "monica", avatar_url: "../images/93352ba3eb8143f031af35fe16e5a109.jpg"},
    {id: 54, login: "rachel", avatar_url: "../images/93352ba3eb8143f031af35fe16e5a109.jpg"},
];

export const userSchema =  new schema.Entity('users');
export const userListSchema = [userSchema];

export const fetchUsers = (page) => (dispatch, getState) => {
    dispatch({type: USERS_REQUEST});

    const normalizedUsers = normalize([...people], userListSchema);

    dispatch({type: USERS_RESPONSE, payload: {fetchedData: [...people], fetchedNormalizedData: normalizedUsers}});

    // fetch('https://api.github.com/users')
    //     .then(response => response.json())
    //     .then(data => dispatch({type: USERS_RESPONSE, payload: data.slice((page-1)*ROWS_PER_PAGE,page*ROWS_PER_PAGE)}))
    //     .catch(error=> dispatch({type: USERS_FAILED, payload: {}}));

}

export const starIt = (idx) => (dispatch) => {
     dispatch({type: USER_STARRED, payload: idx});

}

export const unStarIt = (idx) => (dispatch, getState) => {
    // console.log('unStarIt: index=', idx);
    dispatch({type: USER_UNSTARRED, payload: idx});
    // console.log('after USER_UNSTARRED = ', getState().userlist);
}

