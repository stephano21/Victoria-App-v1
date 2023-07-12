import { API_HOST } from "../static/Url";
import axios from 'axios';
import {IEstaciones, ILotes, IPlantas, IProyectos} from '../../types'
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const VictoriaAPI = axios.create({
  baseURL:API_HOST
})
export async function getProyectosApi() {
  try {
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
export async function SaveLectura(data:Ilecturas) {
  try {
    var url = '/lecturas';
    const response = await VictoriaAPI.post(url,data)
    console.log(response.data)
  } catch (error) {
    throw error;
  }
}
