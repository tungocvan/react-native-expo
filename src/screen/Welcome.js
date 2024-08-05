import React from 'react';
import { Text, View, ImageBackground,  Image, TouchableOpacity } from 'react-native';
// import { msgAlert } from './utils/utils'
// import {  useSelector, useDispatch } from 'react-redux';
// import { isCheckLogin , isLoginSelector} from '../redux/reducers/accountSlice'

import { MySafeArea } from './utils/utils'

function Welcome({ navigation }) {
    let SafeArea = MySafeArea()       
    //const dispatch = useDispatch();     
    // var isLogin = useSelector(isLoginSelector)
    // if(isLogin === false){
    //     dispatch(isCheckLogin('token'))  
    // }else{     
    //   navigation.navigate('MyDrawer', { screen: 'Home' }) 
    // }       

    return ( 
        <ImageBackground source={require('../assets/images/bg.jpg')} resizeMode="cover" style={{flex:1}}>
        <SafeArea style={{flex:1,marginHorizontal:5}}>
            <View style={{height:'15%', justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../assets/images/logo.png') } resizeMode="contain" style={{flex:1, width:"100%"}} />
            </View>
            <View style={{height:'65%', justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:24, fontWeight:'bold'}}>Giao dịch, an toàn, tiện lợi</Text>
              <Text style={{fontSize:20, marginTop:15 }}>Mọi thông tin giao dịch đều được bảo mật</Text>
              <Text style={{fontSize:20 }}>bởi chính sách bảo mật của HAMADA</Text>
            </View>
            <View style={{flex:1, justifyContent:'space-around',alignItems:'center'}}>
               <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Login')
                }}
                style={{width:'100%', backgroundColor:'#1D7124',justifyContent:'center',alignItems:'center',height:'40%', borderRadius:10 }}>
                    <Text style={{color:'white', fontSize:20}}>Đăng Nhập</Text>
               </TouchableOpacity>
               <TouchableOpacity 
               onPress={() => {
                   navigation.navigate('Register')
                }}
               style={{width:'100%', backgroundColor:'#B6E2F6',justifyContent:'center',alignItems:'center',height:'40%' , borderRadius:10}}>
                    <Text style={{color:'black', fontSize:20}}>Đăng Ký Tài Khoản</Text>
               </TouchableOpacity>
            </View>
        </SafeArea>
        </ImageBackground>
    );
}

export default Welcome;