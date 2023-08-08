import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
    Login: undefined;
    Inicio: undefined;
    Register: undefined;
    Lotes:undefined;
    Estaciones:undefined;
    Plantas:undefined;
    Lecturas:undefined;
    options: route,

};
type route ={
    id : number,
    Name: string,
}

export type NavigationScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type LoteScreenRouteProp = RouteProp<RootStackParamList, 'Lotes'>;
export interface NavigationProps {
    navigation: NavigationScreenProp;
    route: LoteScreenRouteProp;
}
export interface IProyectos {
    id:              number;
    Codigo_Proyecto: string;
    Nombre:          string;
    Id_Hacienda:     number;
}
export interface ILotes {
    id:          number;
    Codigo_Lote: string;
    Nombre:      string;
    Hectareas:   number | null;
    Variedad:    null;
    Id_Proyecto: number;
}
export interface IEstaciones {
    id:              number;
    Codigo_Estacion: string;
    Nombre:          string;
    Id_Lote:         number;
}
export interface IPlantas {
    id:            number;
    Codigo_Planta: string;
    Nombre:        string;
    Id_Estacion:   number;
}
export interface ILecturas {
    id:             number;
    E1:             number;
    E2:             number;
    E3:             number;
    E4:             number;
    E5:             number;
    Id_Planta:      number;
    Monilla:        null| number;
    Phythptora:     null| number;
    Colletotrichum: null| number;
    Corynespora:    null| number;
    Lasodiplodia:   null| number;
    Cherelles:      null| number;
    Insectos:       null| number;
    Animales:       null| number;
    Observacion:    string;
    FechaVisita:    Date;
    Activo:         boolean;
}
export interface IToken {
    access_token:  string;
    refresh_token: string;
}
export interface ILogin {
    username:  string;
    password:  string;
}
export interface IRegister {
    username:    string;
    password:    string;
    cedula:      number;
    email:       string;
    is_active:   boolean;
    date_joined: Date;
    first_name:  string;
    last_name:   string;
    is_staff:    boolean;
}
