import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILotes } from '../../types';


export async function LocalDataHandle(id: Number, data: string, filter:string) {

    console.log(data+'--'+id)
    const storedData = await AsyncStorage.getItem(data);
    if (storedData) {
        console.log('offline')
        const parsedData = JSON.parse(storedData);
        console.log(parsedData)
        const filteredData = parsedData.filter(obj => obj[filter] === id);

        return filteredData
    }
}