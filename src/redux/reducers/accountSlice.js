import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import {AsyncStorage} from 'react-native';  

export const loginUser = createAsyncThunk('accounts/loginUser', async (data) => {
  try {            
    const response = await axios.post('https://laravel.tungocvan.com/api/dangnhap',data); // Thay đổi URL API của bạn tại đây
    return response.data      
    } catch (error) {
      console.error('Đã có lỗi gọi api xảy ra:');    
      return Promise.reject(error);
    }        
})
  

export const saveAccountCurrent = createAsyncThunk('accounts/accountsFetched',  
// goi api cho nay , sau do return tra ve phia extraReducers
(userCurrent) => {
        return userCurrent;     
})

const accountSlice = createSlice({
  name: "accounts",
  initialState: {
    isLogin: false,
    account: {
      email: "tungocvan@gmail.com",
      password: "123",
    },
  }, 
  reducers: {
    isLogout(state) {      
      state.isLogin = false;
      return state;    
    },       
    isCheckLogin(state,key) {       
      //console.log('key:',key.payload);
      _retrieveData = async () => {
        try {  
          const value = await AsyncStorage.getItem(key.payload);
          if (value !== null) {
            // We have data!! 
            //console.log(value);
            state.isLogin = true;

            return state;
          }
        } catch (error) {
          // Error retrieving data
          console.log(error); 
          
        }
      };

      
    },          
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveAccountCurrent.fulfilled, (state, action) => {
        // logic here
         state.account = action.payload  
      }) 
    
    builder.addCase(loginUser.fulfilled,(state, action) => {
      // console.log('action.payload:',action.payload)
      if(action.payload.length === 0){ 
        state.isLogin = false
        
      }else{
        state.isLogin = true
        state.account = action.payload 
        _storeData = async () => {
        try {
          await AsyncStorage.setItem(
            'token',
            JSON.stringify(state.account),
          );
        } catch (error) {
          console.log(error);
        }
      };
      }
           
      // console.log('payload:',state.isLogin)    
      
    })   
      
  }
});

//const { actions, reducer } = todoSlice;
// Reducer
 const accountsReducer = accountSlice.reducer;
// Selector
export const accountsSelector = (state) => {
  return state.accounts;
};
export const isLoginSelector = (state) => {
  return state.accounts.isLogin;
};


export const { isLogout,isCheckLogin } = accountSlice.actions;
export default accountsReducer;
