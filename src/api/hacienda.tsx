import { API_HOST } from "../static/Url";
import axios from 'axios';
import {IProyectos} from '../../types'
import { Alert } from "react-native";

export const VictoriaAPI = axios.create({
  baseURL:API_HOST
})
export async function getProyectosApi(endpointUrl: string | null) {
  try {
    const response = await VictoriaAPI.get<IProyectos[]>('/proyectos');
    console.log(response.data);
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

  
export async function getLotesApi(id:number | null) {
  try {
    var url: string =`${API_HOST}/lotes`;
    if (id != null) url += `/`+id; 
    //const url =`${API_HOST}/lotes`;
    
    
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
  
export async function getEstacionesApi(id:number | null) {
  try {
    var url = `${API_HOST}/estaciones`;///${id}
    if (id != null) url += `/`+id; 

    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function getPlantasApi(id:number | null) {
  try {
    var url = `${API_HOST}/plantas`;///${id}
    if (id != null) url += `/`+id; 

    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
