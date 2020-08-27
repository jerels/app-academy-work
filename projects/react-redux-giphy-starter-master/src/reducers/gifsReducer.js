import { RECIEVE_GIFS } from '../actions/gifActions'

// TODO: Import the `RECEIVE_GIFS` constant

const gifsReducer = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_GIFS:
      const newState = [...state, ...action.gifs]
      return newState;
    default:
      return state;
    // TODO: Return the GIFs from the action object if the action type is `RECEIVE_GIFS`
    // TODO: Return the previous state by default

  }
};

export default gifsReducer;
