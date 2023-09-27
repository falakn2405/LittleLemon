import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import WelcomeScreen from './WelcomeScreen';
import Footer from './components/Footer';
import MenuItemsFL from './components/MenuItemsFL';
import MenuItems from './components/MenuItemsSV';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <WelcomeScreen />
        <MenuItemsFL />
      </View>
      {/* <View style={styles.list}>
        <MenuItemsFL />
      </View> */}
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
  list: {
    flex: 0.3,
    backgroundColor: '#333333'
  },
  footer: {
    backgroundColor: '#333333'
  },
})