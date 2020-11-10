import axios from 'axios';
import {
    GET_POSTERS,
    POSTER_ERROR,
    UPDATE_LIKES,
    GET_POSTER
} from './types';

// Get posters
export const getPosters = () => async dispatch => {
    try {
        const res = await axios.get('/api/posters');

        dispatch({
            type: GET_POSTERS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POSTER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// All like
export const addLike = posterId => async dispatch => {
    try {
        const res = await axios.put(`/api/posters/like/${posterId}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: { posterId, likes: res.data }
        })
        dispatch(getPoster(posterId));
        dispatch(getPosters());
    } catch (err) {
        dispatch({
            type: POSTER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Get poster
export const getPoster = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/posters/${id}`);

        dispatch({
            type: GET_POSTER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POSTER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}