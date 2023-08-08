import { API_HOST } from "../static/Url";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILogin, IToken } from '../../types';
import { Alert } from "react-native";
export const VictoriaAPI = axios.create({
  baseURL:API_HOST,
})
export async function LoginApi(Userdata: ILogin) {
  try {
    const response = await VictoriaAPI.post('/login/',Userdata);
    const tokenData: IToken = response.data;
    return tokenData;
  } catch (error) {
    Alert.alert('Ocurrió un error!', error.toString(), [
      {
        text: 'ok',
      },
    ]);
    throw error;
  }
}
