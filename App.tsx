import React from 'react';

//Navigation
import {NavigationContainer} from '@react-navigation/native'
// Components
import MyStack from './src/navigation/Navigation'
import { InternetConnectionProvider } from './src/api/InternetConnectionContext';


export default function App() {
  return (
    <InternetConnectionProvider>
      <NavigationContainer>
          <MyStack/>
      </NavigationContainer>
    </InternetConnectionProvider>
  );
  
}
