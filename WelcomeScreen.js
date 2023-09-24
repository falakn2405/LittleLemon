import * as React from 'react';  
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function WelcomeScreen() {
    return(
        <View style={styles.container}>
            <ScrollView indicatorStyle={"white"}>
                <Text style={styles.textHeader}>
                    Welcome to Little Lemon
                </Text>
                <Text style={styles.text}>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails
                    in a lively but casual environment. We would love to hear more about your experience with us!
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.78
    },
    textHeader: {
        padding: 40, 
        fontSize: 45, 
        color: 'white', 
        textAlign: 'center'
    },
    text: {
        padding: 20, 
        marginVertical: 8, 
        fontSize: 35, 
        color: 'white', 
        textAlign: 'center'
    }
})