import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, SafeAreaView } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';
const backImage = require("../../assets/backImage.png");
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";


const validationSchema = Yup.object().shape({
    email: Yup.string().email('Correo electronico invalido').required('Campo requerido'),
    password: Yup.string().required('Campo requerido'),
});

const LoginScreen = ({ navigation }) => {


    const handleLogin = (handleSubmit) => {
        handleSubmit();
    };

    // const handleLogin = () => {
    //     navigation.navigate('Home');
    // };

    return (
        <View style={styles.container}>
            <Image source={backImage} style={styles.backImage} />
            <View style={styles.whiteSheet} />
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    if (values.email !== "" && values.password !== "") {
                        signInWithEmailAndPassword(auth, values.email, values.password)
                            .then(() => {
                                alert("Inicio de sesion correcto");
                                navigation.navigate("Main");
                            }
                            )
                            .catch((err) => alert("Correo o contraseña incorrecta", err.message));
                    }
                }}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <SafeAreaView style={styles.form}>
                        <Text style={styles.title}>Bienvenido de nuevo</Text>
                        <Text style={{ color: 'gray', marginTop: -60, alignSelf: 'center', fontSize: 19, marginBottom: 50 }}>
                            Inicia sesión con tu cuenta
                        </Text>
                        <View>
                            <View style={styles.inputContainer}>
                                <Icon name="envelope" size={20} color="gray" style={{ position: 'absolute', left: 15, top: 18, zIndex: 1 }} />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder="Correo electronico"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    autoFocus={true}
                                />
                            </View>
                            {errors.email && <Text style={{ position: 'absolute', color: 'red', fontSize: 17, top: 55 }}>{errors.email}</Text>}
                            <View style={styles.inputContainer}>
                                <Icon name="lock" size={22} color="gray" style={{ position: 'absolute', left: 18, top: 18, zIndex: 1 }} />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    placeholder="Contraseña"
                                    secureTextEntry
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="password"
                                />
                            </View>
                            {errors.password && <Text style={{ position: 'absolute', color: 'red', fontSize: 17, top: 150 }}>{errors.password}</Text>}
                            <View style={{ marginTop: 0, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end' }}>
                                <Text style={{ color: 'gray', fontWeight: '600', fontSize: 14 }}>Olvidaste tu contraseña? </Text>
                            </View>
                            <TouchableOpacity style={styles.button} onPress={() => handleLogin(handleSubmit)}>
                                <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 20 }}>Inicia sesión</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                )}
            </Formik>
            <StatusBar barStyle="light-content" />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#22c55e",
        alignSelf: "center",
        paddingBottom: 60,
        marginTop: 200,
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
        borderTopRightRadius: 60,
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

export default LoginScreen;