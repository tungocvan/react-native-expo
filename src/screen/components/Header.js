import React from 'react';
import {  
  View,  
  Image,
  TouchableOpacity  
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {  useSelector, useDispatch } from 'react-redux';
import {  isLoginSelector } from '../../redux/reducers/accountSlice'

// create a component
const Header = (props) => {
    //console.log('props:',props.onBack) 
    let onBack = props.onBack;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const isLogin = useSelector(isLoginSelector) 
    const handlerCart = () => { 
      console.log('cart')  
    } 
    
    if(isLogin === false) { 
       navigation.navigate('Login')
     } 
    return (
        <View  
        style={{
          height: '60px',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center', 
          paddingHorizontal: 10,
          paddingVertical: 5
        }}>
        <TouchableOpacity>
            {
              onBack ? (<Ionicons name="arrow-undo-outline" color="black" size={24} onPress={() => navigation.goBack()} />) : (<Ionicons name="list-outline" color="black" size={24} onPress={() => navigation.openDrawer()} />)
            }
            
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain" 
          style={{ flex:1, height:'100%' }}
        />
        <TouchableOpacity onPress={handlerCart}>
          <Ionicons name="cart-outline" color="black" size={24} />
        </TouchableOpacity>
          </View>
    );
};

export default Header;
