import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import  {thunk} from 'redux-thunk';
import rootReducer from "./reducers" // index는 기본파일이라 끝까지 입력안해도 인식함

import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice"
import authenticateReducer from "./reducers/authenticateReducer"


// let store = createStore(rootReducer, 
//     composeWithDevTools(applyMiddleware(thunk)))

 const store = configureStore({
    reducer:{
        auth : authenticateReducer,
        product : productReducer
    }
})

export default store;