import {
    GET_POSTERS,
    POSTER_ERROR,
    UPDATE_LIKES,
    GET_POSTER,
    DELETE_POSTER,
    ADD_POSTER,
    ADD_COMMENT,
    REMOVE_COMMENT,
    EDIT_POSTER
} from '../actions/types';

const initialState = {
    posters: [],
    poster: null,
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTERS:
            return {
                ...state,
                posters: payload,
                loading: false,
            };
        case ADD_POSTER:
        case EDIT_POSTER:
            return {
                ...state,
                posters: [...state.posters, payload],
                loading: false
            };
        case GET_POSTER:
            return {
                ...state,
                poster: payload,
                loading: false,
            };
        case DELETE_POSTER:
            return {
                ...state,
                posters: state.posters.filter(poster => poster._id !== payload),
                loading: false
            }
        case POSTER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        case UPDATE_LIKES:
            return {
                ...state,
                posters: state.posters.map((poster) =>
                    poster._id === payload.id
                        ? { ...poster, likes: payload.likes }
                        : poster
                ),
                loading: false,
            };
        case ADD_COMMENT:
            return {
                ...state,
                poster: {
                    ...state.poster,
                    comments: payload,
                    loading: false
                }
            }
        case REMOVE_COMMENT:
            return {
                ...state,
                poster: {
                    ...state.poster,
                    comments: state.poster.comments.filter(comment => comment._id !== payload),
                    loading: false
                }
            }
        default:
            return {
                state,
            };
    }
}
