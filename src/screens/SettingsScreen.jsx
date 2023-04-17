import React, { useState, useContext } from "react";
import { View, Text, Switch } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import ThemeContext from "../theme/ThemeContext";
const fondo = require('../../assets/fondo.png')

const SettingsScreen = () => {
    const theme = useContext(ThemeContext);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.backgroundColor}}>
            <Text style={{color: theme.color}}>Cambiar tema</Text>
            <Switch
                value={darkMode}
                onValueChange={(value) => {
                    setDarkMode(value);
                    EventRegister.emit('ChangeTheme', value)
                }}
            />
        </View>
    );
};

export default SettingsScreen;