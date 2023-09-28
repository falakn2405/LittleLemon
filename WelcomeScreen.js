import * as React from 'react';  
import { Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform, Image, View } from 'react-native';

export default function WelcomeScreen() {
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [message, onChangeMessage] = React.useState('');

    return(
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <ScrollView keyboardDismissMode='on-drag'>
                <View style={styles.headerWrapper}>
                    <Image resizeMode='contain' 
                        style={styles.img}
                        source={require('./img/logo.png')}
                        accessible={true}
                        accessibilityLabel='Little Lemon Logo'
                    />
                    <Text style={styles.headingSection}>Little Lemon</Text>
                </View>
                {/* <Text style={styles.headingSection}>
                    Welcome to Little Lemon
                </Text> */}
                
                <Text style={styles.infoSection}>
                    Little Lemon is a charming neighborhood bistro that serves simple food
                    and classic cocktails in a lively but casual environment. We would love
                    to hear more about your experience with us!
                </Text>
                <TextInput
                    style={styles.input}
                    value={firstName}
                    onChangeText={onChangeFirstName}
                    placeholder='First Name'
                />
                <TextInput
                    style={styles.input}
                    value={lastName}
                    onChangeText={onChangeLastName}
                    placeholder='Last Name'
                />
                <TextInput
                    style={styles.messageInput}
                    value={message}
                    onChangeText={onChangeMessage}
                    placeholder='Message'
                />
            </ScrollView>
        </KeyboardAvoidingView>
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#F4CE14',
    },
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F4CE14',
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
})