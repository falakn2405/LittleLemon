import * as React from 'react';  
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return(
        <View style={{ backgroundColor: '#F4CE14' }}>
            <Text style={{ padding: 10, fontSize: 30, color: 'black', textAlign: 'center' }}>
                Little Lemon
            </Text>
        </View>
    );
}