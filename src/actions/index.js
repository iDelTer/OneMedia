import { SET_MESSAGE, RESET_MESSAGE } from "./types";

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const resetMessage = () => ({
  type: RESET_MESSAGE,
});
