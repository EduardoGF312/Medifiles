import React, {useContext} from "react";
import { View, Text } from "react-native";
import ThemeContext from "../theme/ThemeContext";

const VisualizarScreen = () => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Bienvenido a la pantalla de visualizar</Text>
        </View>
    );
};

export default VisualizarScreen;