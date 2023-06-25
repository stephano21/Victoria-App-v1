import HomeScreen from './../screens/HomeScreen'
import LoginScreen from './../screens/LoginScreen'
import RegisterScreen from './../screens/RegisterScreen'
import LoteScreen from './../screens/LoteScreen'
import EstacionScreen from './../screens/EstacionScreen'
import PlantaScreen from '../screens/PlantaScreen'
import {createStackNavigator} from '@react-navigation/stack'
import { Colors } from './../static/Colors'
import LecturaScreen from '../screens/LecturaScreen';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator()

export default function MyStack (){
  return (
    <>
      <StatusBar />
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: Colors.green },
          headerTitleStyle: { color: Colors.ligth },
          ...(route.name === 'Login' || route.name === 'Register'
            ? { headerShown: false }
            : {}),
        })}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Lotes"
          component={LoteScreen}
          options={({ route }) => ({ title: ` ${route.params?.Proyecto} - Lotes` })}
        />
        <Stack.Screen
          name="Estaciones"
          component={EstacionScreen}
          options={({ route }) => ({ title: ` ${route.params?.Lote} - Estaciones` })}
        />
        <Stack.Screen
          name="Plantas"
          component={PlantaScreen}
          options={({ route }) => ({ title: ` ${route.params?.Estacion} - Plantas` })}
        />
        <Stack.Screen
          name="Lecturas"
          component={LecturaScreen}
          options={({ route }) => ({ title: ` ${route.params?.Planta} - Lectura` })}
        />
      </Stack.Navigator>
    </>
  )
}
