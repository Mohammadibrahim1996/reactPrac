import {createStore, combineReducers} from 'redux';
import {DataReducer} from "./DataReducer";

export const ConfigStore = () =>{
    const store = createStore(
        combineReducers(
            DataReducer,
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}