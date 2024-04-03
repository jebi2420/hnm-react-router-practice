import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

let initialState = {
  productList:[],
  selectedItem: null,
  isLoading: false,
  error: null,
  sizes:[]

}

export const fetchProducts = createAsyncThunk('product/fetchAll', async(searchQuery, thunkApi)=>{
  try{
    let url = `https://my-json-server.typicode.com/jebi2420/hnm-react-router-practice/products?q=${searchQuery}`
    let response = await fetch(url);
    return await response.json();
  }catch(error){
    thunkApi.rejectedWithValue(error.message)
  }
  
})

export const fetchItem = createAsyncThunk('product/fetchOne', async(id, thunkApi)=>{
  try{
    let url = `https://my-json-server.typicode.com/jebi2420/hnm-react-router-practice/products/${id}`
    let response = await fetch(url);
    return await response.json();
  }catch(error){
    thunkApi.rejectedWithValue(error.message)
  }
  
})

// function cer(state=initialState, action){
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
    getSingleProduct(state,action){
      state.selectedItem = action.payload.data;
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchProducts.pending,(state)=>{
      state.isLoading=true
    })
    .addCase(fetchProducts.fulfilled,(state, action)=>{
      state.isLoading=false
      state.productList= action.payload
    })
    .addCase(fetchProducts.rejected,(state, action)=>{
      state.isLoading=false
      state.error= action.payload
    });
    builder.addCase(fetchItem.pending,(state)=>{
      state.isLoading=false
    })
    .addCase(fetchItem.fulfilled,(state, action)=>{
      state.isLoading=false
      state.item = action.payload
      state.sizes = action.payload.size
    })
    .addCase(fetchItem.rejected,(state)=>{
      state.isLoading=false
    });
  }
})

console.log("productSlice:", productSlice)

export const productAcitons = productSlice.actions;
export default productSlice.reducer;