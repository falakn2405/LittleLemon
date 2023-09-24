import * as React from 'react';  
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    return(
        <View>
            <Text style={{ padding: 40, fontSize: 30, color: 'white', textAlign: 'center' }}>
                Welcome to Little Lemon
            </Text>
            <Text style={{ padding: 20, marginVertical: 8, fontSize: 25, color: 'white', textAlign: 'center' }}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails
                in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </View>
    );
}