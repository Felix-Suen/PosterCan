import axios from 'axios';
import { loadUser } from './auth.js';
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
            payload: { msg: err.response.statusText,
                status: err.response.status, }
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
        await dispatch(loadUser());

        const res = await axios.get(`/api/posters/${id}`);

        dispatch({
            type: GET_POSTER,
            payload: res.data
        })

        
    } catch (err) {
        dispatch({
            type: POSTER_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
}

// delete poster
export const deletePoster = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/posters/${id}`);
        dispatch({
            type: DELETE_POSTER,
            payload: id,
        })

        dispatch(getPosters());
    } catch (err) {
        dispatch({
            type: POSTER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
} 

// add poster
export const addPoster = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    try {
        const res = await axios.post(`/api/posters`, formData, config);
        dispatch({
            type: ADD_POSTER,
            payload: res.data,
        })
        dispatch(getPosters());
    } catch (err) {
        dispatch({
            type: POSTER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
} 

// edit poster
export const editPoster = (id, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    try {
        const res = await axios.post(`/api/posters/edit/${id}`, formData, config);
        dispatch({
            type: EDIT_POSTER,
            payload: res.data,
        })
        dispatch(getPosters());
    } catch (err) {
        dispatch({
            type: POSTER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
} 

// add comment
export const addComment = (postId, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    try {
        const res = await axios.post(`/api/posters/comment/${postId}`, formData, config);
        dispatch({
            type: ADD_COMMENT,
            payload: res.data,
        })
        // dispatch(getPosters());
    } catch (err) {
        dispatch({
            type: POSTER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
} 
// delete comment
export const deleteComment = (postId, commentId) => async dispatch => {
    
    try {
        const res = await axios.delete(`/api/posters/comment/${postId}/${commentId}`);
        dispatch({
            type: REMOVE_COMMENT,
            payload: commentId,
        })
        // dispatch(getPosters());
    } catch (err) {
        dispatch({
            type: POSTER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
} 