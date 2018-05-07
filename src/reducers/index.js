import axios from "axios/index";

export const FETCH_PAGE = 'FETCH_PAGE';

const INITIAL_STATE = {page: 1, text: ''};
const API_URL = 'http://localhost:8000';

export function pageCounter (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PAGE:
            const url = action.payload.config.url.split('/');
            return {page: Number(url[url.length -1]), text: action.payload.data};
        default:
            return state
    }
}

export function fetchPage(id) {
    const request = axios.get(`${API_URL}/page/${id}`);
    return {
        type: FETCH_PAGE,
        payload: request,
    }
}