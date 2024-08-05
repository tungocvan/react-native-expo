import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Modal, Button, Platform, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CartContext } from './CartContext'; 

const Cart = ({ navigation }) => {
  const { cart, setCart } = useContext(CartContext);
  const [change, setChange] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [orderInfo, setOrderInfo] = useState({ name: '', address: '', phone: '', email: '' });

  useEffect(() => {
    if (Object.keys(cart).length === 0) {
      navigation.goBack(); // Nếu giỏ hàng trống, chuyển về trang chủ
    }
  }, [cart, navigation, change]);
  
  const handleQuantityChange = (id, quantity) => {
    const updatedCart = { ...cart };
    const newQuantity = Math.max(0, quantity);
    if (newQuantity === 0) {
      delete updatedCart[id];
    } else {
      updatedCart[id].quantity = newQuantity;
    }
    setCart(updatedCart);
    setChange(!change);
  };

  const increaseQuantity = (id) => {
    const updatedCart = { ...cart };
    if (updatedCart[id]) {
      updatedCart[id].quantity += 1;
      setCart(updatedCart);
      setChange(!change);
    }
  };

  const decreaseQuantity = (id) => {
    const updatedCart = { ...cart };
    if (updatedCart[id]) {
      if (updatedCart[id].quantity > 1) {
        updatedCart[id].quantity -= 1;
      } else {
        delete updatedCart[id];
      }
      setCart(updatedCart);
      setChange(!change);
    }
  };

  const removeItem = (id) => {
    if(cart[id]){
        delete cart[id]; 
        setCart({...cart});
        setChange(!change);
    }
  };

  const handleConfirmOrder = () => {
    if (Platform.OS === 'web') {
      if(cart){               
        setCart(Object.keys(cart).forEach(key => delete cart[key]));        
        setChange(!change);
      }
      alert('Order Confirmed! Thank you for your purchase.');    
    } else {
      Alert.alert(
        'Order Confirmed',
        'Thank you for your purchase.',
        [
          {
            text: 'OK',
            onPress: () => {
              if(cart){               
                setCart(Object.keys(cart).forEach(key => delete cart[key]));        
                setChange(!change);
              }
            }
          }
        ]
      );
    }
    setModalVisible(false);
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemText}>Product ID: {item.id}</Text>
      <Text style={styles.cartItemText}>Name: {item.name}</Text>
      <Text style={styles.cartItemText}>Price: {item.price}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.adjustButton}
          onPress={() => decreaseQuantity(item.id)}
        >
          <Text style={styles.adjustButtonText}>-</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.quantityInput}
          keyboardType="numeric"
          value={item.quantity.toString()}
          onChangeText={(text) => handleQuantityChange(item.id, parseInt(text) || 0)}
        />
        <TouchableOpacity
          style={styles.adjustButton}
          onPress={() => increaseQuantity(item.id)}
        >
          <Text style={styles.adjustButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeItem(item.id)}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const cartItems = Object.values(cart);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back-circle-outline" color="black" size={28} />
          <Text style={styles.header}>Giỏ Hàng</Text>
      </TouchableOpacity>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.cartList}
      />
      <Text style={styles.totalText}>Total: {totalAmount.toFixed(2)}</Text>
      <TouchableOpacity style={styles.paymentButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.paymentButtonText}>Payment</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Order</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={orderInfo.name}
              onChangeText={(text) => setOrderInfo({ ...orderInfo, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={orderInfo.address}
              onChangeText={(text) => setOrderInfo({ ...orderInfo, address: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              value={orderInfo.phone}
              onChangeText={(text) => setOrderInfo({ ...orderInfo, phone: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={orderInfo.email}
              onChangeText={(text) => setOrderInfo({ ...orderInfo, email: text })}
            />
            <Button title="Confirm Order" onPress={handleConfirmOrder} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  cartList: {
    paddingBottom: 10,
  },
  cartItem: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
  },
  cartItemText: {
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityInput: {
    width: 50,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 16,
  },
  adjustButton: {
    backgroundColor: '#4F46E5',
    padding: 10,
    borderRadius: 5,
  },
  adjustButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  paymentButton: {
    backgroundColor: '#4F46E5',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  paymentButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Cart;
