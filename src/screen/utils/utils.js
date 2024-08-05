import {  
  Platform,
  SafeAreaView as SafeAreaViewIos,  
  View
} from 'react-native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const  MySafeArea = () => {
    let SafeArea = View      
    if(Platform.OS === 'ios') {
      SafeArea = SafeAreaViewIos
    }
    if(Platform.OS === 'android') {
      SafeArea = SafeAreaViewAndroid
    }
    return SafeArea
}

export const isTypeOf = (value) => Object.prototype.toString.call(value).slice(8,-1)

export const formatMoney = (amount, decimalCount = 0, decimal = ',', thousands = '.') => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    let result =
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '');
    return result;
  } catch (e) {
    console.log(e);
  }
}

export const createStorage = (key) => {
  const store = async () => {    
    try {      
      const jsonValue = await AsyncStorage.getItem(key);
      //console.log(typeof jsonValue);  
      if(jsonValue != null){
        console.log('get ok !')
        if(isTypeOf(jsonValue) === "Array"){             
             return JSON.parse(jsonValue)
        }
        return jsonValue;
      }
      console.log('get fail !')
      return null;
    } catch (e) {
      // read error 
      console.log(e); 
    }
  }; 

  const save = async (value) => {    
    try {
     // console.log('store:',value)
      const jsonValue = JSON.stringify(value); 
      await AsyncStorage.setItem(key, jsonValue);
      console.log('set ok !')
    } catch (e) { 
      console.log('set fail !')
      // save error
      console.log(e);
    }
  }; 

  const storage = {
    get() {  
      return store(key);
    },
    set(value) {      
      store[key] = value;      
      save(store[key]);
    },
    remove() {
        AsyncStorage.removeItem(key).then(()=>{
          console.log('remove oki !')
        }).catch(() => {
          console.log('remove fail !')
        });
    },
  };
  return  storage;
}


export const isEmail = (email) => {
  console.log('email:',email)
    return  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

export const isPhone = (number) => {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}

export const msgAlert = (options) => {
  $type = options?.type ?? 'success'
  $text1 = options?.text1 ?? 'Hello'
  $text2 = options?.text2 ?? ''
  Toast.show({
      type: $type,
      text1: $text1, 
      text2: $text2
    });
}