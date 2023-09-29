import axios from 'axios';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Header, Icon, Input } from 'react-native-elements';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";

function CadastraContatoScreen({ navigation }) {

    const [getNome, setNome] = useState();
    const [getEmail, setEmail] = useState();
    const [getTelefone, setTelefone] = useState();

    function inserirDados() {

        axios.post('http://localhost:3000/contatos'
            , {
                nome: getNome,
                avatar_url: "https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                telefone: getTelefone,
                email: getEmail
            }).then(function (response) {
                console.log('contato cadastrado')
                showMessage({
                    message: "Contato cadastrado com sucesso!",
                    type: "success"
                });
                navigation.navigate('ListaContato')
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
                        onPress={() => navigation.navigate('ListaContato')}
                    />
                }
                centerComponent={{ text: 'Contato', style: { color: '#fff', fontWeight: 'bold', fontSize: '30px' } }}

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
                    placeholder='E-mail'
                    containerStyle={{
                        marginVertical: 20,
                        paddingHorizontal: 20,
                    }}
                    onChangeText={text => setEmail(text)}
                    value={getEmail}
                />

                <Input
                    placeholder='Telefone'
                    containerStyle={{
                        marginVertical: 20,
                        paddingHorizontal: 20,
                    }}
                    onChangeText={text => setTelefone(text)}
                    value={getTelefone}
                />

                <Button
                    title="Salvar"
                    buttonStyle={{
                        marginTop: 20,
                        height: 40,
                        width: 250,
                    }}
                    onPress={() => inserirDados()}
                />

                <FlashMessage position="top" />

            </View>

        </View>

    );
}

export default CadastraContatoScreen;