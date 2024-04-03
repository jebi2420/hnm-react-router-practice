import {productReducer} from '../reducers/productSlice';

// function getProducts(searchQuery){
//   return async(dispatch, getState) => {
//     // json-server의 Endpoints
//     let url = `https://my-json-server.typicode.com/jebi2420/hnm-react-router-practice/products?q=${searchQuery}`
//     let response = await fetch(url);
//     let data = await response.json();
//     //setProductList(data);
//     //dispatch({type:"GET_PRODCUT_SUCESS", payload:{data}})
//     dispatch(productAction.getAllproducts({data}))
//   }
// }

function getProductDetail(id){
  return async(dispatch) => {
    let url = `https://my-json-server.typicode.com/jebi2420/hnm-react-router-practice/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    //setProductList(data);
    dispatch({type:"GET_SINGLE_PRODCUT_SUCESS", payload:{data}})
  }
}

// 여러 개의 함수를 하나의 객체에 담어서 리턴
export const productAction = { getProductDetail}