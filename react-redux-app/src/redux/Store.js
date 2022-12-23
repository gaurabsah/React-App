import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import BookReducer from "./book/BookReducer";

const store = createStore(BookReducer, applyMiddleware(logger));


export default store;