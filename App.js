import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login';
import LsContatosScreen from './screens/lsContatos';
import CadastroScreen from './screens/cadastro';
import ContatoScreen from './screens/contato';
import UpDelScreen from './screens/up-del';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LsContatos" component={LsContatosScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Contato" component={ContatoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UpDel" component={UpDelScreen} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;