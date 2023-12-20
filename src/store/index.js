import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import DevTools from './DevTools';
import mainReducer from "../reducers/index";

const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(thunk),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument(),
  );
  

const store = createStore (
    mainReducer, 
    {
        items : [],
        totalAmonut : 0
    }, 
    enhancer
)

export default store;