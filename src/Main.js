import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './screen/Welcome';
import Login from './screen/Login';
import Register from './screen/Register';
import Forget from './screen/Forget';

import MyDrawer from './screen/components/MyDrawer';


import FlashSale from './screen/FlashSale';

function Main() {
  const [fontsLoaded] = useFonts({
    black: require('./assets/fonts/Inter-Black.ttf'),
    bold: require('./assets/fonts/Inter-Bold.ttf'),
    regular: require('./assets/fonts/Inter-Regular.ttf'),
    medium: require('./assets/fonts/Inter-Medium.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
 
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <MainStack />
    </NavigationContainer>
  );
}

function MainStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Đăng nhập',
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Đăng ký tài khoản',
        }}
      />
      <Stack.Screen
        name="Forget"
        component={Forget}
        options={{
          title: 'Quên mật khẩu',
        }}
      />
      <Stack.Screen
        name="FlashSale"
        component={FlashSale}
        options={{
          header: () => null,
        }}
      />    
      <Stack.Screen
        name="MyDrawer"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Main;
