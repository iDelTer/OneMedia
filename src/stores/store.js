import { configureStore, combineReducers } from "@reduxjs/toolkit";

import messageReducer from "../reducers/messageReducer"; // Por ejemplo

// Combina los reducers en un reducer raíz
const rootReducer = combineReducers({
  message: messageReducer, // Puedes agregar otros reducers aquí
});

// Crea la tienda y aplica middleware si es necesario
const store = configureStore({ reducer: rootReducer });

export default store;
