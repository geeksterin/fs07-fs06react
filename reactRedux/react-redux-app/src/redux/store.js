// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productsaga from "./productSaga";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(productsaga);
