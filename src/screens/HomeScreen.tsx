import React, { useState, useEffect, useContext } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { getProyectosApi, getEstacionesApi, getLotesApi, getPlantasApi } from "../api/hacienda";
import { NavigationProps, IProyectos } from './../../types';
import Card from '../components/Card';
import Loader from "../components/Loader";
import InternetConnectionContext from "../api/InternetConnectionContext";
import AsyncStorage from "@react-native-async-storage/async-storage";


const HomeScreen = ({ navigation }: NavigationProps) => {
  const [proyectos, setProjects] = useState<IProyectos[]>([]);
  const [isLoading, setIsLoading] = useState(false); // Variable de estado para el loader

  const loadProyectos = async () => {
    try {
      setIsLoading(true); // Establecer isLoading a true al comenzar la carga de datos
      const response = await getProyectosApi();
      const [lotes, estaciones, plantas] = await Promise.all([
        getLotesApi(),
        getEstacionesApi(),
        getPlantasApi()
      ]);
      setProjects(response);
      // Guardar los datos en AsyncStorage
      //await SaveLocalData('proyectosData', response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Establecer isLoading a false al finalizar la carga de datos
    }
  };

  useEffect(() => {
    (async () => {
      if (isConnected) {
        await loadProyectos();
      } else {
        const storedData = await AsyncStorage.getItem('ProyectosLocal');
        if (storedData) {
          console.log('offline')
          const parsedData = JSON.parse(storedData);
          console.log(parsedData)
          setProjects(parsedData);
        }
      }
    })();
  }, []);

  const handleCardPress = (id: number, Nombre: string) => {
    navigation.navigate('Lotes', { id: id, Proyecto: Nombre });
  };
  const isConnected = useContext(InternetConnectionContext);
  return (
    <ScrollView>
      <View style={styles.container}>
        {isLoading ? ( // Mostrar el loader si isLoading es true
          <Loader />
        ) : (
          <View style={styles.row}>
            {proyectos.map((card, index) => (
              <Card
                key={index}
                title={card.Codigo_Proyecto}
                description={card.Nombre}
                image={card.id.toString()}
                id={card.id}
                onPress={() => handleCardPress(card.id, card.Codigo_Proyecto)}
              />
            ))}
          </View>

        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    margin: 10
  },
});

export default HomeScreen;
