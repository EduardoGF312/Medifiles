import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegistrarScreen from "../screens/RegistrarScreen";
import VisualizarScreen from "../screens/VisualizarScreen";
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Inicio") {
                        iconName = focused ? "home" : 'home-outline';
                    } else if (route.name === "Registrar") {
                        iconName = focused ? "create" : 'create-outline';
                    } else if (route.name === "Ver") {
                        iconName = focused ? "eye" : 'eye-outline';
                    }else if (route.name === "Ajustes") {
                        iconName = focused ? "settings" : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: '#22C55E',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Inicio" component={HomeScreen} />
            <Tab.Screen name="Registrar" component={RegistrarScreen} />
            <Tab.Screen name="Ver" component={VisualizarScreen} />
            <Tab.Screen name="Ajustes" component={SettingsScreen} />
        </Tab.Navigator>
    )
};

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Main"
                component={BottomTabNavigator}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};