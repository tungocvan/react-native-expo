import React from 'react';
import {      
  ScrollView,
  Text,
  View
} from 'react-native';
import Header from './components/Header';
import { MySafeArea } from './utils/utils'

export const Customer = () => {
    let SafeArea = MySafeArea()    
    return (
      <SafeArea
      style={{ flex: 1, marginHorizontal: 5, justifyContent: 'space-between' }}>
         <Header />
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 10,
          backgroundColor: '#ccc',
          flexDirection: 'column',
        }}>
        <View>
          <Text>Khách hàng</Text>
        </View>  
        </ScrollView>
      </SafeArea>
    );
}


