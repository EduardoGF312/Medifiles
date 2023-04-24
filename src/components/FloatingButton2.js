import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ThemeContext from "../theme/ThemeContext";

export default function FloatingButton2({onIconSelected, selectedTabIcon}) {
    const [animation] = useState(new Animated.Value(0));
    const [open, setOpen] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(null);
    const theme = useContext(ThemeContext);

    const toggleMenu = () => {
        if(selectedTabIcon !== null && selectedTabIcon !== 'eye') {
            return;
        }

        const toValue = open ? 0 : 1;

        Animated.spring(animation, {
            toValue,
            friction: 5,
            useNativeDriver: false,
        }).start();

        setOpen(!open);

        setSelectedIcon(selectedIcon === "eye" ? null : 'eye');

        if(onIconSelected) {
            onIconSelected(selectedIcon === 'eye' ? null : 'eye');
        }
    };


    const pinStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -80],
                }),
            },
        ],
    };

    const thumbStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -140],
                }),
            },
        ],
    };

    const opacity = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 1],
    });



    return (
        <View style={[styles.container]}>
            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.secondary, thumbStyle, opacity]}>
                    <Ionicons name='reader-outline' size={20} color={theme.iconColor} />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.secondary, pinStyle, opacity]}>
                    <Ionicons name='people-outline' size={20} color={theme.iconColor} />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={toggleMenu}>
                <Animated.View>
                    <Ionicons
                        name={selectedIcon === "eye" ? 'eye' : 'eye-outline'}
                        color={selectedIcon === "eye" ? theme.titleColor : 'gray'}
                        size={25}
                    />
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: "F02A4B",
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 },
    },
    secondary: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#FFF',
    },
})