import * as React from 'react';  
import { Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform, Pressable, View, Alert } from 'react-native';

export default function LoginScreen({navigation}) {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePass] = React.useState('');
    const [loggedIn, onLoggedIn] = React.useState(false);

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <ScrollView keyboardDismissMode='on-drag'>
                <Text style={styles.headerText}>Welcome to Little Lemon</Text>
                {!loggedIn && (
                    <View>
                        <Text style={styles.regularText}>Login to continue </Text>
                        <TextInput
                            style={styles.input}  
                            value={email} 
                            onChange={onChangeEmail} 
                            placeholder='Email Adress'
                            clearButtonMode={'always'}
                        />
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            value={password} 
                            onChange={onChangePass} 
                            placeholder='Password'
                        />
                        <Pressable style={styles.button}
                            onPress={() => {navigation.navigate('Welcome')}}>
                            <Text style={styles.buttonText}>
                                Log In
                            </Text>
                        </Pressable>
                    </View>
                )}
                {loggedIn && (
                    <Text style={styles.headerText}>You are logged inn!</Text>
                )}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
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
    },
    button: {
        padding: 10,
        marginVertical: 8,
        margin: 95,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderRadius: 25
    },
    buttonText: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 30,
    },
});
  