import React, { useState, useEffect } from "react";
import { DarkTheme, NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { MainStackNavigator } from "./src/components/BottomTabNavigator";
import { EventRegister } from "react-native-event-listeners";
import ThemeContext from './src/theme/ThemeContext';
import Theme from "./src/theme/Theme";
import ModalContext from "./src/components/ModalContext";

const WhiteTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#3f3f46',
  }
}

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data);
    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])

  return (
    <ThemeContext.Provider value={darkMode === true ? Theme.dark : Theme.light}>
      <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        <NavigationContainer theme={darkMode === true ? darkTheme : WhiteTheme}>
          <MainStackNavigator />
        </NavigationContainer>
      </ModalContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App