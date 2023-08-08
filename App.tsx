import React from 'react';

//Navigation
import { NavigationContainer } from '@react-navigation/native'
// Components
import MyStack from './src/navigation/Navigation'
import { InternetConnectionProvider } from './src/api/InternetConnectionContext';
import { AuthProvider } from './src/context/AuthContex';


export default function App() {
  const AppState = ({ chlildren }: any) => {
    return (
      <AuthProvider>
        {chlildren}
      </AuthProvider>
    )
  }
  return (
    <AppState>

      <InternetConnectionProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </InternetConnectionProvider>
    </AppState>
  );
}
