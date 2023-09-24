import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import WelcomeScreen from './WelcomeScreen';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header />  
        <WelcomeScreen />
      </View>
      
      <View style={styles.footer}>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#333333'
  },
  footer: {
    backgroundColor: '#333333'
  }
})