import React, { createContext, useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

const InternetConnectionContext = createContext();

export const InternetConnectionProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    // Cancelar la suscripción cuando el componente se desmonte
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <InternetConnectionContext.Provider value={isConnected}>
      {children}
    </InternetConnectionContext.Provider>
  );
};

export default InternetConnectionContext;
