import { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { NavigationProps } from '../../../types';
import { Colors } from '../../static/Colors'
import { ScrollView } from "react-native-gesture-handler";
const LoginForm = ({ navigation }: NavigationProps): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [cedula, setCedula] = useState('');
    return (

        <ScrollView style={styles.scrol}> 
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/icon.png')}
                    style={{ width: 100, height: 100 }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Correo"
                    placeholderTextColor={Colors.warning}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Cédula"
                    placeholderTextColor={Colors.warning}
                    keyboardType="numeric"
                    maxLength={10}
                    value={cedula}
                    onChangeText={(text) => setCedula(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ususario"
                    placeholderTextColor={Colors.warning}
                    value={user}
                    onChangeText={(text) => setUser(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    placeholderTextColor={Colors.warning}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link}>Ya tiene una cuenta? Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
    scrol:{
        marginTop:200
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