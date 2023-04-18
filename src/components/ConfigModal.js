import React, { useState, useContext } from 'react';
import { Text, Modal, View, Button, Switch, Pressable } from "react-native"
import { EventRegister } from "react-native-event-listeners";
import ThemeContext from "../theme/ThemeContext";
import Icon from 'react-native-vector-icons/Ionicons';
import ModalContext from './ModalContext';

export default function ConfigModal() {
    const theme = useContext(ThemeContext);
    const [darkMode, setDarkMode] = useState(false);
    const {isModalOpen, setIsModalOpen} = useContext(ModalContext)

    const modalContainerStyle = {
        flex: 1,
        justifyContent: 'flex-end',
    };
    const modalStyle = {
        backgroundColor: theme.modalBackground,
        alignItems: 'center',
        margin: 20,
        borderRadius: 16,
        paddingHorizontal: 30,
        paddingVertical: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
    const titleStyle = {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    }
    const optionTextStyle = {
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 10
    }
    const optionContainer = {
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection: 'row',
        marginVertical: 10,
        marginLeft: 10
    }

    const button = {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#22c55e',
    }
    const text = {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }

    return (
        <>
            <Modal visible={isModalOpen} transparent={true} animationType={'slide'}>
                <View style={modalContainerStyle}>
                    <View style={modalStyle}>
                        <Text style={[titleStyle, { color: theme.color }]}>Configuración</Text>
                        <View style={optionContainer}>
                            {darkMode ? (
                                <Icon name="sunny" size={24} color={theme.color}/>
                            ) : (
                                <Icon name="moon" size={24} color={theme.color} />
                            )}
                            <Text style={[optionTextStyle, { color: theme.color }]}>Cambiar Tema</Text>
                            <Switch
                                value={darkMode}
                                onValueChange={(value) => {
                                    setDarkMode(value);
                                    EventRegister.emit('ChangeTheme', value)
                                }}
                                style={{marginLeft: 65}}
                            />
                        </View>
                        {/* <Button title='Cerrar' onPress={() => setIsModalOpen(!setIsModalOpen)} /> */}
                        <Pressable style={button} onPress={() => setIsModalOpen(!setIsModalOpen)}>
                            <Text style={text}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    );

}