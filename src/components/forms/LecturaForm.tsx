import { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import { NavigationProps, ILecturas } from '../../../types';
import { Colors } from '../../static/Colors';

const LecturaForm = ({ navigation }: NavigationProps): JSX.Element => {
    const [lectura, setLectura] = useState<ILecturas>({
        id: 0,
        E1: 0,
        E2: 0,
        E3: 0,
        E4: 0,
        E5: 0,
        Id_Planta: 0,
        Monilla: null,
        Phythptora: null,
        Colletotrichum: null,
        Corynespora: null,
        Lasodiplodia: null,
        Cherelles: null,
        Insectos: null,
        Animales: null,
        Observacion: "",
    });

    const handleInputChange = (key: keyof ILecturas, value: string | number | null) => {
        setLectura({ ...lectura, [key]: value });
    };

    const handleSubmit = () => {
        // Aquí puedes hacer algo con los datos de lectura, como enviarlos a la API o realizar alguna acción
        console.log(lectura);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="E1"
                placeholderTextColor={Colors.warning}
                keyboardType="numeric"
                value={lectura.E1.toString()}
                onChangeText={(text) => handleInputChange("E1", Number(text))}
            />
            
            <TextInput
                style={styles.input}
                placeholder="E2"
                placeholderTextColor={Colors.warning}
                keyboardType="numeric"
                value={lectura.E2.toString()}
                onChangeText={(text) => handleInputChange("E2", Number(text))}
            />
           
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
        </View>
    );
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
});

export default LecturaForm;
