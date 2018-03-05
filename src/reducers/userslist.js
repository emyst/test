import {USERS_FAILED, USERS_REQUEST, USERS_RESPONSE, USER_STARRED, USER_UNSTARRED } from "../actions/pageActions";

export const initialState = {
    firstFetchedData: [],
    firstFetchedNormalizedData: {},

    fetching: false,
    isConnectionError: false,

    page: 1,
    unStarredUserIds: [],
    starredUserIds: []
}

export default  (state = initialState, action)=> {
    switch (action.type) {
        case USERS_REQUEST:
            return { ...state, fetching: true }

        case USERS_RESPONSE:
            return { ...state,
                    firstFetchedData: action.payload.fetchedData,
                    firstFetchedNormalizedData: action.payload.fetchedNormalizedData,

                    starredUserIds: [],
                    unStarredUserIds: action.payload.fetchedNormalizedData.result,

                    fetching: false, }

        case USERS_FAILED:
            return { ...state,
                    isConnectionError: true,
                    fetching: false
                    }

        case USER_STARRED:

            return { ...state,
                    starredUserIds:   [...state.starredUserIds, state.unStarredUserIds[action.payload]],
                    unStarredUserIds: [...state.unStarredUserIds.slice(0, action.payload),
                                       ...state.unStarredUserIds.slice(action.payload + 1)
                                      ],
                    fetching: false
                   }

        case USER_UNSTARRED:

            return { ...state,
                    unStarredUserIds: [...state.unStarredUserIds, state.starredUserIds[action.payload]],
                    starredUserIds:   [...state.starredUserIds.slice(0, action.payload),
                                       ...state.starredUserIds.slice(action.payload + 1)
                                        ],
                    fetching: false
                   }
        default:
            return state;
    }
}

