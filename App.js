import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CartProvider } from './CartContext';
import CartIcon from './components/CartIcon';
import Cart from './screens/Cart';
import ProductDetails from './screens/ProductDetails';
import ProductList from './screens/ProductList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        {/* <StatusBar/> */}
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductList} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="Cart" component={Cart} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
