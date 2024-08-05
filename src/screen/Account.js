import React from 'react';
import {  
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { useSelector , useDispatch } from 'react-redux';
import { accountsSelector , isLogout } from '../redux/reducers/accountSlice'
import { MySafeArea } from './utils/utils'
import Header from './components/Header';
import { getData } from './utils/axios'
 


export const  Account = () => {
    const SafeArea = MySafeArea()
    const user = useSelector(accountsSelector); 
    const dispatch = useDispatch();
    const [posts,setPosts] = React.useState([]);
    console.log(user)

    React.useEffect(() => {
    const fetchData = async () => {
      const url = 'https://hamada.vn/wp-json/wp/v2/posts';
      const uri = '';

      try {
        // GET request
        const getDataResponse = await getData(url, uri);
        //console.log('GET Response:', getDataResponse[0].title.rendered);
        if(uri !=='') {
          setPosts([getDataResponse]);
        }else{
            setPosts(getDataResponse);
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
          <Text>Nội Dung</Text>
          {
            user.isLogout ? (
               posts.map((post,idx) => {
                  return (
                    <View key={idx}  style={{display:'flex', flexDirection:'row'}}>
                      <Text style={{marginRight:5}}>{post.id}</Text>
                       <Text>{post.title.rendered}</Text>
                    </View>
                  )
                })

            ):<Text>BBB</Text>
          }
         
        </View>  
        </ScrollView>
      </SafeArea>
    );
}

  