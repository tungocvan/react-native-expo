import React , {useState} from 'react';
import { Text, View, ImageBackground, Platform, SafeAreaView as SafeAreaViewIos, Image, TouchableOpacity , TextInput} from 'react-native';
import { SafeAreaView as SafeAreaViewAndroid } from "react-native-safe-area-context";


function Register({ navigation }) {
    let SafeArea = Platform.OS === "ios" ? SafeAreaViewIos : SafeAreaViewAndroid;    
    const [account,setAccount] =useState(false);
    return (
        <ImageBackground source={require('../assets/images/bg.jpg')} resizeMode="cover" style={{flex:1}}>
        <SafeArea style={{flex:1,marginHorizontal:5, justifyContent:'space-between'}}>
            <View style={{height:'15%', justifyContent:'center',alignItems:'center'}}>
              <Image source={require('../assets/images/logo.png') } resizeMode="contain" style={{flex:1, width:"100%"}} />
            </View>
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:24,fontWeight:'bold',height:40}}>Đăng ký tài khoản</Text>
                <View style={{width:"100%",justifyContent:'center', paddingHorizontal:20}}>
                    <View style={{ height:100,width:'100%'}}>
                        <Text style={{fontSize:16,paddingVertical:10}}>Email*</Text>
                        <TextInput 
                            placeholder={'Nhập email'}
                            style={{width:'100%', borderWidth:1, fontSize:16,paddingHorizontal:10,paddingVertical:10, borderRadius:5,borderColor:'#ccc'}}
                        />
                    </View>
                    {account?(
                        <View style={{ height:100,width:'100%'}}>
                            <Text style={{fontSize:16,paddingVertical:10, color:'red'}}>Tài khoản email đã tồn tại trong hệ thống. Vui lòng nhấn quên mật khẩu để phục hồi mật khẩu.</Text>                    
                        </View>
                    ):null}
                    
                    <View style={{ height:100,width:'100%'}}>
                        <Text style={{fontSize:16,paddingVertical:10}}>Vui lòng nhập email chính xác, mật khẩu đăng ký sẻ được gửi đến email của bạn.</Text>                    
                    </View>
                    <View style={{ height:100,width:'100%'}}>
                        <TouchableOpacity 
                            onPress={() => {
                                navigation.navigate('Forget')
                             }}
                            style={{alignItems:'flex-end'}}>
                            <Text style={{fontSize:16,paddingVertical:10}}>Quên mật khẩu*</Text>                    
                        </TouchableOpacity>
                    </View>
                 
                </View>
            </View>            
            <TouchableOpacity style={{height:50, justifyContent:'space-around',alignItems:'center', backgroundColor:"blue", borderRadius:10,marginHorizontal:15}}>                 
                <Text style={{paddingVertical:10, fontSize:20,color:'white'}}>Đăng ký</Text>                               
            </TouchableOpacity>    
        </SafeArea>
        </ImageBackground>
    );
}

export default Register;