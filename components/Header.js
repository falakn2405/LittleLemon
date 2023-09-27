import * as React from 'react';  
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Little Lemon
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.12,
        backgroundColor: '#EE9972',
    },
    text: {
        padding: 20, 
        fontSize: 30, 
        color: 'black', 
        textAlign: 'center',
    }
})