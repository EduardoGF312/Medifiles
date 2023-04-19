import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ThemeContext from "../theme/ThemeContext";
import { Ionicons } from '@expo/vector-icons';

const Card = ({ title, number, iconName }) => {
    const theme = useContext(ThemeContext);

    return (
        <View style={[styles.card, { backgroundColor: theme.card }]}>
            <View style={styles.content}>
                <Text style={[styles.title, { color: theme.numberCard }]}>{title}</Text>
                <Text style={[styles.number, { color: theme.numberCard }]}>{number}</Text>
                {iconName && (
                    <View style={styles.iconContainer}>
                        <Ionicons name={iconName} size={45} color={theme.numberCard} />
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        padding: 20,
        marginBottom: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        width: '95%',
        height: '21%',
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        alignSelf: 'flex-end'
    },
    number: {
        fontSize: 55,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    iconContainer: {
        position: 'absolute',
        top: -5,
        left: -5
    },
});

export default Card;