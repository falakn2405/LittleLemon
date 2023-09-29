import * as React from 'react';  
import {View, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, 
    Platform, Image, useColorScheme, useWindowDimensions } from 'react-native';

export default function WelcomeScreen() {
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [message, onChangeMessage] = React.useState('');
    const colorScheme = useColorScheme();
    const window = useWindowDimensions();

    return(
        <ScrollView style={[styles.container, colorScheme === 'dark' 
            ? { backgroundColor: '#fff' } 
            : { backgroundColor: '#333333' }, ]}>
            <View style={styles.headerWrapper}>
                <Image resizeMode='contain' 
                    style={styles.img}
                    source={require('./img/logo.png')}
                    accessible={true}
                    accessibilityLabel='Little Lemon Logo'
                />
                <Text style={styles.headingSection}>Little Lemon {colorScheme}</Text>
            </View>
            {/* <Text style={styles.headingSection}>
                Welcome to Little Lemon
            </Text> */}
                
            <Text style={styles.infoSection}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
            </Text>
            <Text style={styles.infoSection}> Window Dimension</Text>
            <Text style={styles.regular}> Height: {window.height}</Text>
            <Text style={styles.regular}> Width: {window.width}</Text>
            <Text style={styles.regular}> Font Scale: {window.fontScale}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#333333',
    },
    headingSection: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    regular: {
        fontSize: 20,
        padding: 5,
        color: '#EDEFEE',
        textAlign: 'center',
    }
})  