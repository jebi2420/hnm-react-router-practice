import { createStore, applyMiddleware } from 'redux';
import  {thunk} from 'redux-thunk';
import rootReducer from "./reducers" // index는 기본파일이라 끝까지 입력안해도 인식함

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store;