import { useState, useEffect, useContext } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { getLotesApi } from "../api/hacienda";
//
import { NavigationProps, ILotes } from '../../types';


//components
import Card from '../components/Card';
import AsyncStorage from "@react-native-async-storage/async-storage";
import InternetConnectionContext from "../api/InternetConnectionContext";
import { LocalDataHandle } from "../localData/LocalStorange";


const LoteScreen = ({ navigation, route }: NavigationProps) => {
  const { id } = route.params;
  console.log("Id recived: "+id)
  const [proyectos, setProjects] = useState<ILotes[]>([]);

  const loadLotes = async () => {
    try {
      const response = await getLotesApi(id)// Espera la respuesta de la API
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
        await loadLotes();
      } else {
        const data:ILotes[] = await LocalDataHandle(id,'LotesLocal','Id_Proyecto')
        setProjects(data)
      }
    })();
  }, []);
  const handleCardPress = (id:number, Lote: string) => {
    // Aquí puedes realizar la redirección a la nueva pantalla con la información correspondiente al ID
    navigation.navigate('Estaciones', { id: id , Lote: Lote})
  };
  const isConnected = useContext(InternetConnectionContext);
    return (
        <ScrollView>
            <View style={styles.row}>
              {proyectos.map((card, index) => (
              <Card key={index} title={card.Codigo_Lote} description={card.Nombre} image={card.id.toString()} id={card.id} onPress={handleCardPress}/>
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
export default LoteScreen