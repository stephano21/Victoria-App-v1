import React, { useState, useEffect } from "react";
import { ScrollView, View, Dimensions,StyleSheet } from "react-native";
import { getEstacionesApi } from "../api/hacienda";
//
import { NavigationProps, IEstaciones } from '../../types';


//components
import Card from '../components/Card';

const screenWidth = Dimensions.get('window').width;

const EstacionScreen = ({ navigation, route }: NavigationProps) => {
  const { id } = route.params;
  console.log("Id recived: "+id)
  const [proyectos, setProjects] = useState<IEstaciones[]>([]);

  const loadEstaciones = async () => {
    try {
      const response = await getEstacionesApi(id)// Espera la respuesta de la API
      // proyectos es un arreglo de objetos con los datos que necesitas

      // Actualiza el estado con los datos recibidos
      setProjects(response);
      
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    (async () => {
      await loadEstaciones();
    })();
  }, []);
  const handleCardPress = (id:number, Estacion: string ) => {
    // Aquí puedes realizar la redirección a la nueva pantalla con la información correspondiente al ID
    navigation.navigate('Plantas', { id: id , Estacion: Estacion})
  };
    return (
        <ScrollView>
            <View style={styles.row}>
              {proyectos.map((card, index) => (
              <Card key={index} title={card.Codigo_Estacion} description={card.Nombre} image={card.id.toString()} id={card.id} onPress={handleCardPress}/>
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
export default EstacionScreen