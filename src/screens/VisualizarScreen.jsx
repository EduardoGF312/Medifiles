import React, {useContext} from "react";
import { View, Text } from "react-native";
import ThemeContext from "../theme/ThemeContext";

const VisualizarScreen = () => {
    const theme = useContext(ThemeContext);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.background}}>
            <Text style={{color: theme.color}}>Bienvenido a la pantalla de visualizar</Text>
        </View>
    );
};

export default VisualizarScreen;