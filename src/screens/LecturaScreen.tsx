import React, { useState, useEffect } from "react";
import { ScrollView,StyleSheet } from "react-native";
import { getPlantasApi } from "../api/hacienda";
//
import { NavigationProps, ILecturas } from '../../types';


//components
//import Card from '../components/Card';


const LecturaScreen = ({ navigation, route }: NavigationProps) => {
  const { id } = route.params;
  console.log("Id recived: "+id)
  const [proyectos, setProjects] = useState<ILecturas[]>([]);

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
      await loadPlantas();
    })();
  }, []);
  const handleCardPress = (id:number, Estacion: string) => {
    // Aquí puedes realizar la redirección a la nueva pantalla con la información correspondiente al ID
  };
    return (
        <ScrollView>
            
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
export default LecturaScreen