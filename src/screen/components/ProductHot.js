import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
function ProductHot({ navigation }) {
  return (
    <>
      <View
        style={{
          height: 40,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              paddingLeft: 10,
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Sản phẩm hot
          </Text>
        </View>
        <TouchableOpacity>
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View
          style={{
            height: 300,
            backgroundColor: 'white',
            borderRadius: 10,
            width: '48%',
          }}></View>
        <View
          style={{
            height: 300,
            backgroundColor: 'white',
            borderRadius: 10,
            width: '48%',
          }}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 10,
        }}>
        <View
          style={{
            height: 300,
            backgroundColor: 'white',
            borderRadius: 10,
            width: '48%',
          }}></View>
        <View
          style={{
            height: 300,
            backgroundColor: 'white',
            borderRadius: 10,
            width: '48%',
          }}></View>
      </View>
    </>
  );
}

export default ProductHot;
