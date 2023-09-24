import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import WelcomeScreen from './WelcomeScreen';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#495E57'}}>
        <Header />  
        <WelcomeScreen />
      </View>
      
      <View style={{ backgroundColor: '#495E57' }}>
        <Footer />
      </View>
    </>
  );
}

