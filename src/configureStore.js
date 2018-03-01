import { createStore, applyMiddleware  } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


import rootReducer from './reducers'

// export default function configureStore(initialState) {
//
//     const store = createStore(rootReducer, /* preoadedState, */ devToolsEnhancer());
// return store
// }

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
    devToolsEnhancer()
);