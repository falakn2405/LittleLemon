import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import WelcomeScreen from './WelcomeScreen';
import Login from './LoginScreen';
import Footer from './components/Footer';
import LoginScreen from './LoginScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerStyle: {backgroundColor: '#FBDABB'}}}>
          <Stack.Screen options={{title: 'Home'}} name='Welcome' component={WelcomeScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#333333'
  },
  list: {
    flex: 0.3,
    backgroundColor: '#333333'
  },
  footer: {
    backgroundColor: '#333333'
  },
})