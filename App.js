import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View  } from 'react-native';
import Toast from 'react-native-toast-message'
import { Provider } from "react-redux";
import Main from './src/Main';
import store from './src/redux/store';
import { CartProvider } from './src/screen/components/CartContext'; // Đường dẫn tới file CartContext.js

export default function App() {   
  return (
    <Provider store={store}>
    <View style={styles.container}>      
      <StatusBar style="auto" />
      <CartProvider>
      <Main />
      </CartProvider>
      <Toast visibilityTime='1000' />       
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
