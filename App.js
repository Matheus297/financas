import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


import AuthProvider from './src/context/ContextApi';
import Routes from './src/routes';



const App = () => {
  return (
   <NavigationContainer>
     <AuthProvider>
       <StatusBar translucent backgroundColor='#131313' barStyle='light-content'/>
       <Routes />
     </AuthProvider>
   </NavigationContainer>
  )
}



export default App;