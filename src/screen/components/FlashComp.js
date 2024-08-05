import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
function FlashComp() {
  const navigation =useNavigation(); 
  return (
    <>
      <View
        style={{
          height: 40,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          marginTop: 10,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              paddingLeft: 10,
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Flash Sale
          </Text>
          <Ionicons name="flash-outline" color="red" size={24} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('FlashSale')}>
          <Text
            style={{
              paddingLeft: 10,
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
            }}>
            XEM THÊM
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 250,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <View style={{ width: '35%', height: '100%' }}></View>
        <View style={{ width: '64%', height: '100%' }}></View>
      </View>
    </>
  );
}

export default FlashComp;
