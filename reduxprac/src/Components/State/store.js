import {createStore, combineReducers } from "redux";
import { myReducer } from "./reducer";

export const configStore=()=>{
 const store = createStore(
     combineReducers({
        myReducer
     }),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
 return store;
}