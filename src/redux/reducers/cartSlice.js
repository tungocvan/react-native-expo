import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const cartsCurrent = createAsyncThunk('carts/cartsFetched',  
// goi api cho nay , sau do return tra ve phia extraReducers
(cartData) => {
        return cartData;     
})

const cartSlice = createSlice({
  name: "carts",
  initialState: {    
    itemsCart:[]
  }, 
  reducers: {
    addCarts(state) {     
      console.log(state.payload)       
      return state;    
    },                     
  },
  extraReducers: (builder) => {
    builder
      .addCase(cartsCurrent.fulfilled, (state, action) => {
        // logic here
         state.account = action.payload  
      }) 
    
  }
});

//const { actions, reducer } = todoSlice;
// Reducer
 const cartsReducer = cartSlice.reducer;
// Selector
export const cartsSelector = (state) => {
  return state.carts;
};
export const isCartsSelector = (state) => {
  return state.carts.isCarts;
};


export const { addCarts } = cartSlice.actions;
export default cartsReducer;
