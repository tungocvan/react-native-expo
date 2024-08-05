import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './reducers/accountSlice';
import cartSlice from './reducers/cartSlice';


const store = configureStore({
reducer: {
    accounts: accountSlice,    
    carts: cartSlice    
},
})
export default store;