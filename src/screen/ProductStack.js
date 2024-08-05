import React from 'react';
import Cart from './components/Cart';
import ProductAll from './components/ProductAll';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const ProductStack = ({searchQuery} ) => {
  // const [cart, setCart] = React.useState({}); 
  return (
    <Stack.Navigator initialRouteName="ProductAll"  screenOptions={{headerShown: false}}>     
        <Stack.Screen name="ProductAll" options={{
          header: () => null,
          title:'',
        }}>
          {props => <ProductAll {...props}  searchQuery={searchQuery}  />} 
        </Stack.Screen>
        <Stack.Screen name="Cart" options={{ title:'Giỏ hàng' , header: () => null }}>
          {props => <Cart {...props}  />} 
        </Stack.Screen>
    </Stack.Navigator>
  );
}; 
export default ProductStack;    