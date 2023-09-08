import * as React from 'react';
import { View, TextInput } from 'react-native';
import { Avatar, Input, Button, Text } from 'react-native-elements';

function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Avatar
                size='xlarge'
                icon={{ name: 'user', type: 'font-awesome' }}
                rounded
                source={{
                    uri:
                        'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
            />


            <Input
                placeholder='Login'
                containerStyle={{
                    marginVertical: 20,
                    paddingHorizontal: 20,
                }}
            />

            <Input
                placeholder='Senha'
                secureTextEntry={true}
                containerStyle={{
                    marginVertical: 20,
                    paddingHorizontal: 20,
                }}
            />

            <Button
                title="Login"
                buttonStyle={{
                    marginTop: 20,
                    height: 40,
                    width: 250
                }}
                onPress={() => navigation.navigate('LsContatos')}
            />

            <Button
                title="Cadastre-se"
                buttonStyle={{
                    marginTop: 20,
                    height: 40,
                    width: 250
                }}
                onPress={() => navigation.navigate('Cadastro')}
            />


        </View>
    );
}

export default LoginScreen;