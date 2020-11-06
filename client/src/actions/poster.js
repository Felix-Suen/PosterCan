import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_POSTERS,
    POSTER_ERROR
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