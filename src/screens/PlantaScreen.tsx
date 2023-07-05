import React, { useState, useEffect, useContext } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { getPlantasApi } from "../api/hacienda";
//
import { NavigationProps, IPlantas } from '../../types';


//components
import Card from '../components/Card';
import InternetConnectionContext from "../api/InternetConnectionContext";
import { LocalDataHandle } from "../localData/LocalStorange";


const PlantaScreen = ({ navigation, route }: NavigationProps) => {
  const { id } = route.params;
  console.log("Id recived: "+id)
  const [proyectos, setProjects] = useState<IPlantas[]>([]);

  const loadPlantas = async () => {
    try {
      const response = await getPlantasApi(id)// Espera la respuesta de la API
      // proyectos es un arreglo de objetos con los datos que necesitas

      // Actualiza el estado con los datos recibidos
      setProjects(response);
      
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    (async () => {
      if (isConnected) {
        await loadPlantas();
      } else {
        const data:IPlantas[] = await LocalDataHandle(id,'PlantasLocal','Id_Estacion')
        setProjects(data)
      }
    })();
  }, []);
  const handleCardPress = (id:number, Planta: string) => {
    // Aquí puedes realizar la redirección a la nueva pantalla con la información correspondiente al ID
    navigation.navigate('Lecturas', { id: id , Planta: Planta})
  };
  const isConnected = useContext(InternetConnectionContext);
    return (
        <ScrollView>
            <View style={styles.row}>
              {proyectos.map((card, index) => (
              <Card key={index} title={card.Codigo_Planta} description={card.Nombre} image={card.id.toString()} id={card.id} onPress={handleCardPress}/>
              ))}
            </View>
        </ScrollView>
    )

}
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
      marginTop:20,
      margin:10
    },
});
export default PlantaScreen