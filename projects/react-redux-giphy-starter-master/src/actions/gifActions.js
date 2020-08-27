import { fetchGifs } from '../util/apiUtil';
import * as APIUtil from '../util/apiUtil';

export const RECIEVE_GIFS = "RECIEVE_GIFS";

// TODO: Import all of your importing your API util function

// TODO: Set and export a constant for your `RECEIVE_GIFS` action type
const recieveGifs = (gifs) => {
    return {
        type: RECIEVE_GIFS,
        gifs
    }
}

export const fetchGifsThunkActionCreator = searchTerm => {
    return dispatch => {
        return APIUtil.fetchGifs(searchTerm)
            .then(res => res.json())
            .then(data => dispatch(recieveGifs(data)))
    }
}

// TODO: Write a function that returns your `action` object literal

// TODO: Write a thunk action creator
