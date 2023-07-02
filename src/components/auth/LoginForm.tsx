import { useState } from "react";
import { Image, View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import { NavigationProps } from './../../../types';
import { Colors } from './../../static/Colors'
const LoginForm = ({ navigation }: NavigationProps): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/icon.png')}
                style={{ width: 100, height: 100 }}
            />
            <TextInput
                style={styles.input}
                placeholder="Ususario"
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
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicio')} >
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.ligth,
    },
    input: {
        width: '80%',
        height: 50,
        padding: 10,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.link,
        marginBottom: 20,
        color: Colors.link,

    },
    button: {
        width: '80%',
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

    }
});
export default LoginForm;