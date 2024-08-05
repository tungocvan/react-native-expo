import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import Header from './components/Header';
import ProductStack  from './ProductStack';
import { MySafeArea } from './utils/utils';

export const Home = () => {
  let SafeArea = MySafeArea();
  const [searchQuery, setSearchQuery] = useState('');   
  return (
    <SafeArea style={{ flex: 1, marginHorizontal: 5, justifyContent: 'space-between' }}> 
      <Header />         
      <View style={{ flex: 1, paddingHorizontal: 10, backgroundColor: '#068F47', flexDirection: 'column' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: '100%',
            backgroundColor: 'white',
            marginTop: 15,
            borderRadius: 10, 
            alignItems: 'center',
            paddingLeft: 15,
            flexDirection: 'row',
            borderWidth: 0,
            marginVertical:5
          }}> 
          <Ionicons name="search-outline" color="black" size={24} />
          <TextInput
            style={{ padding: 10, fontSize: 16, color: 'black', width: '100%', borderWidth: 0, borderColor: 'white' }}
            placeholder="Search"
            onChangeText={text => setSearchQuery(text)}
            value={searchQuery}
          />
        </TouchableOpacity>
        <ProductStack searchQuery={searchQuery} />
      </View>
    </SafeArea>
  );
};


  