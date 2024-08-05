import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ImageBackground, Image, TouchableOpacity , TextInput} from 'react-native';
import { MySafeArea } from './utils/utils'
import {  useSelector, useDispatch } from 'react-redux';
import { loginUser, isLoginSelector } from '../redux/reducers/accountSlice'

function Login() {
    // console.log('login') 
    const navigation = useNavigation();
    let SafeArea = MySafeArea()    
    //const [show,setShow] = React.useState(false)
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [isValidEmail,setIsValidEmail] =React.useState(null);
    const dispatch = useDispatch();
    var isLogin = useSelector(isLoginSelector)
    const handleEmail = (value) => {
        setEmail(value)
        const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/i;
        if (regex.test(email)) {
            setIsValidEmail(true)
        } else {
            setIsValidEmail(false);
        }
    }
    const handleLogin = () => {     
         //console.log('Home')
              
        let data = {
            email:email.toLowerCase().trim(),
            password
        } 
        dispatch(loginUser(data))       
    } 
 
    
    
    React.useEffect(() => {
        if(isLogin === true) {
            console.log('Login useEffect')
            navigation.navigate('MyDrawer', { screen: 'Home' })
        }
    },[isLogin,navigation])

    return (
        <ImageBackground source={require('../assets/images/bg.jpg')} resizeMode="cover" style={{flex:1}}>
        <SafeArea style={{flex:1,marginHorizontal:5, justifyContent:"space-around"}}>
            <View style={{height:'15%', justifyContent:'center',alignItems:'center'}}>
              <Image source={require('../assets/images/logo.png') } resizeMode="contain" style={{flex:1, width:"100%"}} />
            </View>
            <View style={{height:'40%', justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:24,fontWeight:'bold',fontFamily: 'Avenir'}}>Đăng Nhập</Text>
                <View style={{width:"100%",justifyContent:'center',flex:1, paddingHorizontal:20}}>
                    <View style={{ height:100,width:'100%'}}>
                        <Text style={{fontSize:16,paddingVertical:10,fontFamily: 'Avenir'}}>Email*</Text>
                        <TextInput 
                            placeholder={'Nhập email'}
                            style={{width:'100%', borderWidth:1, fontSize:16,paddingHorizontal:10,paddingVertical:10, borderRadius:5,borderColor:'#ccc'}}
                            value={email}
                            onChangeText= {handleEmail}
                        />
                        {!isValidEmail && isValidEmail!==null  && <Text style={{fontSize:16, color:'red', marginBottom:5}}>Email không đúng định dạng</Text>}
                    </View>
                    <View style={{ height:100,width:'100%'}}>
                        <Text style={{fontSize:16,paddingVertical:10}}>Mật khẩu*</Text>
                        <TextInput 
                            placeholder={'Nhập mật khẩu'}
                            style={{width:'100%', borderWidth:1, fontSize:16,paddingHorizontal:10,paddingVertical:10, borderRadius:5,borderColor:'#ccc'}}
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                        />
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
            <TouchableOpacity 
                 onPress={() => handleLogin(navigation)}
                 style={{height:50, justifyContent:'space-around',alignItems:'center', backgroundColor:"blue", borderRadius:10,marginHorizontal:15}}>                 
                <Text style={{paddingVertical:10, fontSize:20,color:'white'}}>Đăng Nhập</Text>                               
            </TouchableOpacity>    
        </SafeArea>
        </ImageBackground>
    );
}

export default Login;