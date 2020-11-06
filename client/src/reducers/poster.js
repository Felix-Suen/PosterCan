import {
    GET_POSTERS,
    POSTER_ERROR
} from '../actions/types';

const initialState = {
    posters: [],
    poster: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_POSTERS:
            return {
                ...state,
                posters: payload,
                loading: false
            }
        case POSTER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return {
                state
            }
    }
}