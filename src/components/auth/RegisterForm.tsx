import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, View, TextInput, StyleSheet, TouchableOpacity, Text, Image, Platform } from "react-native";
import { NavigationProps } from '../../../types';
import { Colors } from '../../static/Colors';

const LoginForm = ({ navigation }: NavigationProps): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [cedula, setCedula] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Image
            source={require('../../../assets/icon.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Registrarse</Text>
          <View style={styles.formContainer}>
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop:"10%",
    paddingBottom: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    	marginTop: 10,
        width: '60%',
        height: 50,
        padding: 0,
        borderWidth: 0,
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom: 20,
        color: Colors.link,

    },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
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

