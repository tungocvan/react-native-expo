//import liraries
import React from 'react';
//import { NavigationContainer, useNavigationState } from '@react-navigation/native';
//import { useFocusEffect } from '@react-navigation/native';
import MyDrawer from './components/MyDrawer';
// create a component
function StackHome({route}) {  
  const { component } = route?.params;
  //  useFocusEffect(
  //   React.useCallback(async () => {
  //     // Do something when the screen is focused
  //     console.log('useFocusEffect')
  //     return () => {
  //       // Do seomething when the screen is unfocused
  //       // Useful for cleanup functions
  //       console.log('exit useFocusEffect');
  //     };
  //   }, [])
  // );
  //console.log(component);
  console.log('StackHome:',component);

  return (
    <MyDrawer component = {component} />
  );  
}


export default StackHome;
