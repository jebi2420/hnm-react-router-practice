let initialState = {
  productList:[],
  selectedItem: null
}

function productReducer(state=initialState, action){
    let {type, payload} = action
    switch(type){
      case "GET_PRODCUT_SUCESS":
        return {...state, productList: payload.data};
      case "GET_SINGLE_PRODCUT_SUCESS":
        return {...state, selectedItem: payload.data};
      default:
        return {...state};
    }
}

export default productReducer;