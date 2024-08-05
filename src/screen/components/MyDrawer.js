//import liraries
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { isLogout , isLoginSelector } from '../../redux/reducers/accountSlice'
import {AsyncStorage} from 'react-native';
import {  useSelector, useDispatch } from 'react-redux';
import Tabs from '../Tabs';
// create a component

function CustomDrawerContent({ navigation }) {
    const dispatch = useDispatch(); 
    var isLogin = useSelector(isLoginSelector)
    const handlerPress = () => {             
      dispatch(isLogout());              
      _logout = async () => {
        try {  
          const value = await AsyncStorage.removeItem('token');          
        } catch (error) {          
          console.log(error); 
          
        }
      };
    } 
    
    React.useEffect(() => {
      if(isLogin === false) {          
        navigation.navigate('Login')
      }
  },[isLogin,navigation])

    
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Home"
        onPress={() => navigation.navigate('Tabs', { screen: 'Home' })}
      />
      <DrawerItem
        label="Customer"
        onPress={() => navigation.navigate('Tabs', { screen: 'Customer' })}
      />
      <DrawerItem
        label="Alerts"
        onPress={() => navigation.navigate('Tabs', { screen: 'Alerts' })}
      />
      <DrawerItem
        label="Tools"
        onPress={() => navigation.navigate('Tabs', { screen: 'Tools' })}
      />
      <DrawerItem
        label="Account"
        onPress={() => navigation.navigate('Tabs', { screen: 'Account' })}        
      />
       <DrawerItem
        label="Logout"
        onPress={() => handlerPress()}        
      /> 
    </DrawerContentScrollView>
  );
}



function MyDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Tabs" component={Tabs} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
