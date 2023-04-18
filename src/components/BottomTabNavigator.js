import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegistrarScreen from "../screens/RegistrarScreen";
import VisualizarScreen from "../screens/VisualizarScreen";
import ThemeContext from "../theme/ThemeContext";
import ModalContext from "./ModalContext";
import FloatingButton from "./FloatingButton";
import FloatingButton2 from "./FloatingButton2";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



export const BottomTabNavigator = () => {
    const theme = useContext(ThemeContext);
    const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
    const [selectedTabIcon, setSelectedTabIcon] = useState(null);
    const [isHomeFocused, setIsHomeFocused] = useState(true);

    const handleIconSelected = (icon) => {
        setSelectedTabIcon(icon);
        setIsHomeFocused(icon === null);
    };

    return (
        // <Tab.Navigator
        //     screenOptions={({ route }) => ({
        //         headerShown: false,
        //         tabBarIcon: ({ focused, color, size }) => {
        //             let iconName;

        //             if (route.name === "Inicio") {
        //                 iconName = focused ? "home" : 'home-outline';
        //             } else if (route.name === "Registrar") {
        //                 iconName = focused ? "create" : 'create-outline';
        //             } else if (route.name === "Ver") {
        //                 iconName = focused ? "eye" : 'eye-outline';
        //             }

        //             return <Ionicons name={iconName} size={size} color={color} />
        //         },
        //         tabBarActiveTintColor: theme.tabBarColor,
        //         tabBarInactiveTintColor: 'gray',
        //         tabBarStyle: {backgroundColor: isModalOpen ? theme.blurBackground : theme.tabBarBackground},
        //     })}
        // >
        //     <Tab.Screen name="Inicio" component={HomeScreen}/>
        //     <Tab.Screen name="Registrar" component={RegistrarScreen} />
        //     <Tab.Screen name="Ver" component={VisualizarScreen} />
        // </Tab.Navigator>
        <Tab.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Inicio"
                component={HomeScreen}
                options={{
                    tabBarItemStyle: {
                        height: 0,
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Ionicons
                                name={isHomeFocused ? 'home' : 'home-outline'}
                                size={25}
                                color={isHomeFocused ? theme.titleColor : 'gray'}
                                style={styles.tabIcon}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Registrar" component={RegistrarScreen}
                options={{
                    tabBarItemStyle: {
                        height: 0,
                    },
                    tabBarIcon: () => (
                        <View style={styles.tabIconContainer}>
                            <FloatingButton onIconSelected={handleIconSelected} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Ver" component={VisualizarScreen}
                options={{
                    tabBarItemStyle: {
                        height: 0,
                    },
                    tabBarIcon: () => (
                        <View style={styles.tabIconContainer}>
                            <FloatingButton2 onIconSelected={handleIconSelected}/>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        padding: 0,
        left: 16,
        right: 16,
        bottom: 32,
        height: 56,
        borderRadius: 16,
        borderTopColor: "transparent",
        shadowColor: '#161719',
        shadowOffset: {
            height: 6,
            width: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    tabIconContainer: {
        position: "absolute",
        top: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    tabIcon: {
        width: 32,
        height: 32,
    },
});

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Main"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};