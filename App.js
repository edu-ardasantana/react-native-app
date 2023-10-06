import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login';
import ListaContatoScreen from './screens/listaContato';
import CadastraUsuarioScreen from './screens/cadastraUsuario';
import CadastraContatoScreen from './screens/cadastraContato';
import AlteraContatoScreen from './screens/alteraContato';
import StorageScreen from './screens/storage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Storage">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ListaContato" component={ListaContatoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CadastraUsuario" component={CadastraUsuarioScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CadastraContato" component={CadastraContatoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AlteraContato" component={AlteraContatoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Storage" component={StorageScreen} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;