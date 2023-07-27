import { combineReducers } from "redux";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
  message: messageReducer,
  // Agrega otros reducers aquí si los tienes
});

export default rootReducer;
