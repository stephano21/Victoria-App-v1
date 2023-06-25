import { API_HOST } from "../static/Url";

export async function getProyectosApi(endpointUrl:string| null) {
    try {
      const url = `${API_HOST}/proyectos`;
      console.log(url);
      // Agregar un tiempo de espera de 1 segundo (1000 milisegundos)
      await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await fetch(endpointUrl || url);
      const result = await response.json();
    } catch (error) {
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
