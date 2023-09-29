import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Input, Button, Header, Icon } from 'react-native-elements';
import axios from 'axios';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";

function CadastraUsuarioScreen({ navigation }) {

    const [getNome, setNome] = useState();
    const [getCpf, setCpf] = useState();
    const [getEmail, setEmail] = useState();
    const [getSenha, setSenha] = useState();

    function inserirDados() {

        axios.post('http://localhost:3000/usuarios'
            , {
                nome: getNome,
                cpf: getCpf,
                email: getEmail,
                senha: getSenha
            }).then(function (response) {
                showMessage({
                    message: "Usuário cadastrado com sucesso!",
                    type: "success"
                });
                navigation.navigate('Login')
            }).catch(function (error) {
                console.log(error)
                showMessage({
                    message: "Algo deu errado: ",
                    type: "danger",
                });
            });

    }

    return (
        <View>

            <Header

                leftComponent={
                    <Icon
                        name='arrow-back'
                        color={'#fff'}
                        size={30}
                        onPress={() => navigation.navigate('Login')}
                    />
                }
                centerComponent={{ text: 'Usuário', style: { color: '#fff', fontWeight: 'bold', fontSize: '30px' } }}

            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Input
                    placeholder='Nome'
                    containerStyle={{
                        marginVertical: 20,
                        marginTop: 40,
                        paddingHorizontal: 20,
                    }}
                    onChangeText={text => setNome(text)}
                    value={getNome}
                />

                <Input
                    placeholder='CPF'
                    containerStyle={{
                        marginVertical: 20,
                        paddingHorizontal: 20,
                    }}
                    onChangeText={text => setCpf(text)}
                    value={getCpf}
                />

                <Input
                    placeholder='e-mail'
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
                    title="Salvar"
                    onPress={() => inserirDados()}
                    buttonStyle={{
                        marginTop: 20,
                        height: 40,
                        width: 250,
                    }}
                />

            </View>
            <FlashMessage position="top" />
        </View>

    );
}

export default CadastraUsuarioScreen;