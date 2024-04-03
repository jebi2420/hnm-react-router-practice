import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  productList:[],
  selectedItem: null
}

// function productReducer(state=initialState, action){
//     let {type, payload} = action
//     switch(type){
//       case "GET_PRODCUT_SUCESS":
//         return {...state, productList: payload.data};
//       case "GET_SINGLE_PRODCUT_SUCESS":
//         return {...state, selectedItem: payload.data};
//       default:
//         return {...state};
//     }
// }

// export default productReducer;

const productSlice = createSlice({
  name:"product",
  initialState,
  reducers: {
    getAllProducts(state,action){
      state.productList= action.payload.data
    },
    getSingleProduct(state,action){
      state.selectedItem = action.payload.data;
    }
  }
})

console.log("productSlice:", productSlice)

export default productSlice.reducer;