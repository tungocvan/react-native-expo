import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const CartButton = ({ cart, navigation }) => {  
  const totalItems = Object.values(cart).reduce((total, item) => total + item.quantity, 0);

  return (
    <TouchableOpacity
      style={styles.cartButton}
      onPress={() => navigation.navigate('Cart')}
    >
      <Ionicons name="cart-outline" size={24} color="white" />
      {totalItems > 0 && (
        <View style={styles.cartBadge}>
          <Text style={styles.cartBadgeText}>{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartBadge: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
    marginLeft: 5,
  },
  cartBadgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CartButton;
