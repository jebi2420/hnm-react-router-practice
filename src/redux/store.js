import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import  {thunk} from 'redux-thunk';
import rootReducer from "./reducers" // index는 기본파일이라 끝까지 입력안해도 인식함

let store = createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(thunk)))

export default store;