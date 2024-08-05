//import liraries
import React from 'react';
import MyDrawer from './components/MyDrawer';
// create a component
function StackAccount({route}) {
  const { component } = route?.params;
    return (
      <MyDrawer component = {component} />
    );  
}


export default StackAccount;
