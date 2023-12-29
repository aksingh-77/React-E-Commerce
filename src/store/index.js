import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import mainReducer from "../reducers/index";
import { composeWithDevTools } from '@redux-devtools/extension';
  

const store = createStore (
    mainReducer, 
    {
        // items : [],
        // totalAmonut : 0
    },
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;