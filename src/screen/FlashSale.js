import React  from 'react';
import { View , Text, ScrollView} from 'react-native';
import { MySafeArea } from './utils/utils'
import Header from './components/Header';
function FlashSale() {
    
    let SafeArea = MySafeArea()   
    return (
       <SafeArea
      style={{ flex: 1, marginHorizontal: 5, justifyContent: 'space-between' }}>
         <Header onBack = {true} />
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 10,
          backgroundColor: '#ccc',
          flexDirection: 'column',
        }}>
        <View>
          <Text>FLASH SALE</Text>
        </View>  
        </ScrollView>
      </SafeArea>

    );
}

export default FlashSale;