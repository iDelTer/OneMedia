import { SET_MESSAGE, RESET_MESSAGE } from "../actions/types";

const initialState = "";

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return action.payload;
    case RESET_MESSAGE: // Case para restablecer el mensaje
      return initialState;
    default:
      return state;
  }
};

export default messageReducer;
