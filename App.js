import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CardDetails from './src/components/CardDetails';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store';
import CartScreen from './src/components/CartScreen';
import Home from './src/components/Home';
import ShoppingCartIcon from './src/components/ShoppingCartIcon';


const Stack = createStackNavigator()


export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{
            headerRight: props => <ShoppingCartIcon {...props} />, headerTintColor: '#013A20',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name='Details' component={CardDetails} />
          <Stack.Screen name='Cart' component={CartScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>)
}