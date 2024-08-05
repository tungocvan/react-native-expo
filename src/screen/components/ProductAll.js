import React, { useState, useEffect, useContext  } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import productsData from '../../products.json';
import CartButton from './CartButton';
import { CartContext } from './CartContext'; 

const ProductAll = ({ searchQuery, navigation }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [page, setPage] = useState(1);
  const productsPerPage = 10;

  //const [cart, setCart] = useState({});

  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
    setVisibleProducts(productsData.slice(0, productsPerPage));
  }, []);

  useEffect(() => {
    let filtered = products;
    if (searchQuery) {
      filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
    setPage(1);
    setVisibleProducts(filtered.slice(0, productsPerPage));
  }, [searchQuery, products]);

  const loadMoreProducts = () => {
    const totalFilteredProducts = filteredProducts.length;
    if (page * productsPerPage >= totalFilteredProducts) return;
    const newPage = page + 1;
    const newVisibleProducts = filteredProducts.slice(0, newPage * productsPerPage);
    setVisibleProducts(newVisibleProducts);
    setPage(newPage);
  };

  const handleAddPress = (product) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      if (updatedCart[product.id]) {
        updatedCart[product.id].quantity += 1;
      } else {
        updatedCart[product.id] = { 
          id: product.id, 
          name: product.name, 
          price: parseFloat(product.price), 
          quantity: 1 
        };
      }
      return updatedCart;
    });
  };

  const handleQuantityChange = (id, quantity) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      const newQuantity = Math.max(0, quantity);
      if (newQuantity === 0) {
        delete updatedCart[id];
      } else {
        updatedCart[id] = { ...updatedCart[id], quantity: newQuantity };
      }
      return updatedCart;
    });
  };

  const increaseQuantity = (id) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id]) {
        updatedCart[id].quantity += 1;
      }
      return updatedCart;
    });
  };

  const decreaseQuantity = (id) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id]) {
        if (updatedCart[id].quantity > 1) {
          updatedCart[id].quantity -= 1;
        } else {
          delete updatedCart[id];
        }
      }
      return updatedCart;
    });
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productContent}>
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>${parseFloat(item.price).toFixed(2)}</Text>
        </View>
        <View style={styles.productActions}>
          {cart[item.id] && (
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
                value={cart[item.id].quantity.toString()}
                onChangeText={(text) => handleQuantityChange(item.id, parseInt(text) || 0)}
              />
              <TouchableOpacity
                style={styles.adjustButton}
                onPress={() => increaseQuantity(item.id)}
              >
                <Text style={styles.adjustButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddPress(item)}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sản Phẩm</Text>
        <CartButton cart={cart} navigation={navigation} />
      </View>
      <FlatList
        data={visibleProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMoreProducts}
        onEndReachedThreshold={0.5}
        contentContainerStyle={styles.productList}
      />
    </>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center', // Align items center vertically
  },
  productImage: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
  productContent: {
    flex: 1,
    justifyContent: 'space-evenly', // Distribute space between details and actions
  },
  productDetails: {
    marginBottom: 10, // Space between details and actions
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  productActions: {
    alignItems: 'flex-start',
  },
  addButton: {
    backgroundColor: '#4F46E5',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%', // Make button width same as quantity container width
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Space between quantity container and button
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#068F47',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  productList: {
    paddingBottom: 10,
  },
});

export default ProductAll;
