import * as React from 'react';  
import { Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function LoginScreen() {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePass] = React.useState('');

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <ScrollView keyboardDismissMode='on-drag'>
                <Text style={styles.headerText}>Welcome to Little Lemon</Text>
                <Text style={styles.regularText}>Login to continue </Text>
                <TextInput
                    style={styles.input}  
                    value={email} 
                    onChange={onChangeEmail} 
                    placeholder='Email Adress'
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={password} 
                    onChange={onChangePass} 
                    placeholder='Password'
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: 'white',
    }
});
  