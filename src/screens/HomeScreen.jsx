import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ThemeContext from "../theme/ThemeContext";
import axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome';
import ConfigModal from "../components/ConfigModal";

const HomeScreen = () => {
    const [mensaje, setMensaje] = useState("");
    const [pacientes, setPacientes] = useState("");
    const [registros, setRegistros] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        const getCurrentHour = () => {
          const now = new Date();
          const hour = now.getHours();
          return hour;
        };
    
        const updateImageSrc = () => {
          const hour = getCurrentHour();
    
          if (hour >= 0 && hour < 7) {
            setMensaje("Buenas noches!"); // Mensaje para la imagen de la noche
          } else if (hour >= 7 && hour < 12) {
            setMensaje("Buenos dias!"); // Mensaje para la imagen de la noche
          } else if (hour >= 12 && hour < 20) {
            setMensaje("Buenas tardes!"); // Mensaje para la imagen de la noche
          } else {
            setMensaje("Buenas noches!"); // Mensaje para la imagen de la noche
          }
        };
    
    
        const fetchData = async () => {
          try {
            const response = await axios.get('https://pruebasint323.fly.dev/pacientes');
            const response2 = await axios.get('https://pruebasint323.fly.dev/registros');
            const pacientesNumber = response.data.length;
            const registrosNumber = response2.data.length;
            setPacientes(pacientesNumber);
            setRegistros(registrosNumber);
          } catch (error) {
            console.log(error);
          }
        };
    
        updateImageSrc();
    
        // Configuramos el intervalo para llamar a fetchData() cada 1000 ms (1 segundo)
        const interval = setInterval(fetchData, 1000);
    
        // Limpiamos el intervalo al desmontar el componente
        return () => clearInterval(interval);
      }, []);

    return (
        <View style={styles.container}>
            <Icon name="gear" size={30} color="#22c55e" style={{ position: 'absolute', top: 48, zIndex: 1, alignSelf: "flex-end" }} />
            <Text style={[styles.title, { color: theme.titleColor }]}>{mensaje}</Text>
            <Button title="Open Modal"></Button>
            <ConfigModal 
                isModalOpen={isModalOpen} 
                setIsModalOpen={setIsModalOpen}
                
            />
            <Text style={{ color: theme.color }}>{pacientes}</Text>
            <Text style={{ color: theme.color }}>{registros}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: "flex-start",
        paddingBottom: 60,
        marginTop: 40,
    },
    input: {
        backgroundColor: "#F6F7FB",
        height: 58,
        marginBottom: 35,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
        paddingStart: 50
    },
    backImage: {
        width: "100%",
        height: 340,
        position: "absolute",
        top: 0,
        resizeMode: 'cover',
    },
    whiteSheet: {
        width: '100%',
        height: '75%',
        position: "absolute",
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    button: {
        backgroundColor: '#22c55e',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
});

export default HomeScreen;