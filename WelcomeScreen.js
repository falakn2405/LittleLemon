import * as React from 'react';  
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function WelcomeScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>
                Welcome to Little Lemon
            </Text>
            <Text style={styles.text}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails
                in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.4
    },
    textHeader: {
        padding: 35, 
        fontSize: 20, 
        color: 'white', 
        textAlign: 'center'
    },
    text: { 
        marginVertical: 8, 
        fontSize: 20, 
        color: 'white', 
        textAlign: 'center'
    }
})