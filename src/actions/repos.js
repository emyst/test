export const REPOS_REQUEST =  'REPOS_REQUEST';
export const REPOS_RESPONSE =  'REPOS_RESPONSE';
export const REPOS_FAILED =  'REPOS_FAILED';


export const loadRepos = (query) => (dispatch, getState) => {
    dispatch({type: REPOS_REQUEST});
    fetch('https://api.github.com/search/repositories?q=react')
        .then(response => response.json())
        .then(data => dispatch({type: REPOS_RESPONSE, payload: data.items}))
        .catch(error=> dispatch({type: REPOS_FAILED, payload: {}}));
}
