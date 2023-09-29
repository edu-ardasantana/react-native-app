import axios from 'axios';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

function LoginScreen({ navigation }) {

    const [getEmail, setEmail] = useState();
    const [getSenha, setSenha] = useState();

    function logar() {

        axios.get('http://localhost:3000/usuarios?email=' + getEmail + '&senha=' + getSenha)
            .then(function (response) {

                if (response.data.length == 0) {
                    showMessage({
                        message: "Email ou senha inválidos",
                        type: "danger",
                    });
                } else {
                    navigation.navigate('ListaContato')
                }
            })
            .catch(function (error) {
                showMessage({
                    message: "Algo deu errado: " + error,
                    type: "danger",
                });
            });


    }

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
                placeholder='Email'
                containerStyle={{
                    marginVertical: 20,
                    paddingHorizontal: 20,
                }}
                onChangeText={text => setEmail(text)}
                value={getEmail}
            />

            <Input
                placeholder='Senha'
                secureTextEntry={true}
                containerStyle={{
                    marginVertical: 20,
                    paddingHorizontal: 20,
                }}
                onChangeText={text => setSenha(text)}
                value={getSenha}
            />

            <Button
                title="Login"
                buttonStyle={{
                    marginTop: 20,
                    height: 40,
                    width: 250
                }}
                onPress={() => logar()}
            // onPress={() => navigation.navigate('LsContatos')}
            />

            <Button
                title="Cadastre-se"
                buttonStyle={{
                    marginTop: 20,
                    height: 40,
                    width: 250
                }}
                onPress={() => navigation.navigate('CadastraUsuario')}
            />

            <FlashMessage position="top" />
        </View>
    );
}

export default LoginScreen;