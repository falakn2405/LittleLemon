import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Header from './components/Header';
import WelcomeScreen from './WelcomeScreen';;
import Footer from './components/Footer';
import MenuItemsSL from './components/MenuItemsSL';
import LoginScreen from './LoginScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        {/* <Stack.Navigator initialRouteName='Login' screenOptions={{headerStyle: {backgroundColor: '#FBDABB'}}}>
          <Stack.Screen options={{title: 'Home'}} name='Welcome' component={WelcomeScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator> */}
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if(route.name === 'Welcome') {
                iconName = 'ios-home';
              } else if (route.name === 'Login') {
                iconName = 'ios-enter';
              }
              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })} initialRouteName='Login'>
          <Tab.Screen name='Login' component={LoginScreen} />
          <Tab.Screen name='Welcome' component={WelcomeScreen} />
        </Tab.Navigator>
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