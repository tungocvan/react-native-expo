import React , {useState} from 'react';
import { View , Text, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
function CategoryComp ( {navigation} ) {
    return (
      <>
        <View style={{flexDirection:'row', marginVertical:10}}>
                        <Text style={{ paddingLeft:10,fontSize:20,color:'white', fontWeight:'bold'}}>Ngành hàng</Text>                           
        </View>
        <View
          style={{
            height: 300,
            backgroundColor: 'white',
            borderRadius: 10,
          }}></View>
      </>
    );
}

export default CategoryComp;