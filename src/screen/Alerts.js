import React from 'react';
import {   
  ScrollView,
  Text,
  View
} from 'react-native';
import { MySafeArea } from './utils/utils'
import Header from './components/Header';


export const Alerts = () => {
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
          <Text>Thông Báo</Text>
        </View>  
        </ScrollView>
      </SafeArea>
    );
}

