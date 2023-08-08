import { createContext } from "react";

//interfaz de Autorizacion
export interface AuthState{
    isLoggedIn: boolean,
    username: string,
}
//estado inicial
export const AuthInitialState: AuthState={
    isLoggedIn: false,
    username: "schang",
}
//que se expone del contexto
export interface AuthContextProps{
    authState: AuthState;
    singIn: () => void;
}
//creando el contexto
export const AuthContex = createContext({}as AuthContextProps);
//componente proveedor del estado
export const AuthProvider = ({children}:any)=>{
    return(
        <AuthContex.Provider value={{
            authState: AuthInitialState,
            singIn: () =>{},
        }}>
        </AuthContex.Provider>
    )
}