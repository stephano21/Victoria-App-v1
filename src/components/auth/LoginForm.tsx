import { useState } from "react";
import { Image, View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import { LoginApi } from './../../api/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Colors } from './../../static/Colors'
import { IToken, NavigationProps } from '../../../types';

const LoginForm = ({ navigation }: NavigationProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const loginData = {
                username: email,
                password: password,
            };
            const response = await LoginApi(loginData);
            const tokenData: IToken = response;
            console.log(tokenData)
            const tokenString = JSON.stringify(tokenData);
            //await AsyncStorage.setItem('Token', tokenString);

            navigation.navigate('Inicio');
        } catch (error) {
            setError(error.toString());
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/icon.png')}
                style={{ width: 100, height: 100 }}
            />
            <Text style={styles.title}>Victoria Técnicos</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                placeholderTextColor={Colors.warning}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor={Colors.warning}
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>Registrarse</Text>
            </TouchableOpacity>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.ligth,
    },
    input: {
        width: '60%',
        height: 50,
        padding: 10,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.link,
        marginBottom: 20,
        color: Colors.link,
    },
    title: {
        marginTop: 10,
        width: '60%',
        height: 50,
        padding: 0,
        borderWidth: 0,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: Colors.link,
    },
    button: {
        width: '60%',
        backgroundColor: Colors.warning,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: Colors.ligth,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    link: {
        marginTop: 10,
        color: Colors.link,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default LoginForm;
