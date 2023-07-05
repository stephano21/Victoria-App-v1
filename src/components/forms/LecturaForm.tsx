import { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import { NavigationProps, ILecturas } from '../../../types';
import { Colors } from '../../static/Colors';

const LecturaForm = ({ navigation, id }: NavigationProps & { id: number }): JSX.Element => {
    const [lectura, setLectura] = useState<ILecturas>({
        id: 0,
        E1: 0,
        E2: 0,
        E3: 0,
        E4: 0,
        E5: 0,
        Id_Planta: id,
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
        console.log(typeof value);
        if (!isNaN(Number(value))) {
            setLectura({ ...lectura, [key]: value });
        }else{
            const filteredValue = value.replace(/[^0-9]/g, '');
            setLectura({ ...lectura, [key]: filteredValue });
            //Alert.alert("re")
        }
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
                onChangeText={(text) => handleInputChange("E1", Number(text))}
            />

            <TextInput
                style={styles.input}
                placeholder="E2"
                placeholderTextColor={Colors.warning}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("E2", Number(text))}
            />
            <TextInput
                style={styles.input}
                placeholder="E3"
                placeholderTextColor={Colors.warning}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("E3", Number(text))}
            />
            <TextInput
                style={styles.input}
                placeholder="E4"
                placeholderTextColor={Colors.warning}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("E4", Number(text))}
            />
            <TextInput
                style={styles.input}
                placeholder="E5"
                placeholderTextColor={Colors.warning}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("E5", Number(text))}
            />
            <TextInput
                style={styles.input}
                placeholder="Monilla"
                placeholderTextColor={Colors.warning}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("Monilla", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Phythptora"
                placeholderTextColor={Colors.warning}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("Phythptora", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Colletotrichum"
                placeholderTextColor={Colors.warning}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("Colletotrichum", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Corynespora"
                placeholderTextColor={Colors.warning}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("Corynespora", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Lasodiplodia"
                placeholderTextColor={Colors.warning}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("Lasodiplodia", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Cherelles"
                placeholderTextColor={Colors.warning}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("Cherelles", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Insectos"
                placeholderTextColor={Colors.warning}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("Insectos", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Animales"
                placeholderTextColor={Colors.warning}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("Animales", text)}
            />
            <TextInput
                style={styles.input}
                multiline={true}
                placeholder="Observacion"
                placeholderTextColor={Colors.warning}
                onChangeText={(text) => handleInputChange("Observacion", text)}
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
