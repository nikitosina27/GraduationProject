import { createStoreHook } from "react-redux";
import filterReducer from "./reducers/filterReducer";
import moviesReducer from "./reducers/moviesReducer";
import paginationReducer from "./reducers/paginationReducer";
import { CombinedState, Reducer, combineReducers } from 'redux';
import { Movie, MoviesState } from "../types/types";
import createSagaMiddleware from 'redux-saga';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import rootSaga from '../saga/sagas'; 
import { createStore, applyMiddleware } from "redux";
import { FilterState } from "../types/types";
import { PaginationState } from "./reducers/paginationReducer";
import userReducer from './reducers/userReducer';


export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  undefined,
  AnyAction
>;



const rootReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  filters: filterReducer,
  pagination: paginationReducer, 
  
});


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

export default store;

