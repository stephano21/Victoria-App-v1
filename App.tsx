import React from 'react';

//Navigation
import {NavigationContainer} from '@react-navigation/native'
// Components
import MyStack from './src/navigation/Navigation'


export default function App() {
  return (
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
  );
  
}
