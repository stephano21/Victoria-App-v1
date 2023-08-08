import { API_HOST } from "../static/Url";
import axios from 'axios';
import {IEstaciones, ILotes, IPlantas, IProyectos, ILecturas, IToken} from '../../types';
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getTokenData = async () => {
  try {
    const tokenString = await AsyncStorage.getItem('Token');
    if (tokenString) {
      const tokenData: IToken = JSON.parse(tokenString);
      //Utiliza tokenData según sea necesario
      console.log(tokenData);
      return tokenData
    } else {
      // Maneja el caso cuando no hay token almacenado
    }
  } catch (error) {
    // Maneja el error de AsyncStorage
  }
};

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkyNjE1ODU4LCJpYXQiOjE2ODk1OTE4NTgsImp0aSI6ImQ0MzdkMzRkOTAxYzRmOGY4YjcxZTBhMjdhZGRiMmVmIiwidXNlcl9pZCI6MX0.qy8h5HrfZsDPEF02bkdG_62Dr2ZI3lz-aCzmsZJRaQM";//getTokenData();


export const VictoriaAPI = axios.create({
  baseURL:API_HOST,
  headers: {
    Authorization: `Bearer ${token}`, // Agrega el token JWT al encabezado "Authorization"
  },
})
export async function getProyectosApi() {
  try {
  console.log(token);
    const response = await VictoriaAPI.get<IProyectos[]>('/proyectos');
    await AsyncStorage.setItem('ProyectosLocal', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    Alert.alert("Ocurrió un error!", error.toString(), [
      {
        text: 'ok'
      }
    ]);
    throw error;
  }
}

  
export async function getLotesApi(id:number | null= null) {
  try {
    var url: string =`/lotes`;
    if (id != null) url += `/`+id; 
    const response = await VictoriaAPI.get<ILotes[]>(url);
    AsyncStorage.setItem('LotesLocal', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
}
  
export async function getEstacionesApi(id:number | null= null) {
  try {
    var url = `/estaciones`;///${id}
    if (id != null) url += `/`+id; 
    const response = await VictoriaAPI.get<IEstaciones[]>(url);
    AsyncStorage.setItem('EstacionesLocal', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function getPlantasApi(id:number | null=null) {
  try {
    var url = `/plantas`;///${id}
    if (id != null) url += `/`+id; 
    const response = await VictoriaAPI.get<IPlantas[]>(url);
    AsyncStorage.setItem('PlantasLocal', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function SaveLectura(data:ILecturas) {
  try {
    var url = '/lecturas/';
    const response = await VictoriaAPI.post(url,data)
    console.log(response.data)
    Alert.alert("Transaccion exitosa","Se ha registrado exitosamente!"+response.status.toString(),  [
            {
              text: 'ok'
            }
          ])
    return ;
  } catch (error) {
  Alert.alert("Ocurrió un error!", error.toString(), [
      {
        text: 'ok'
      }
    ]);
    throw error;
  }
}
