import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Header, Icon } from 'react-native-elements';
import axios from 'axios';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

function AlteraContatoScreen({ navigation, route }) {

    const [id, setId] = useState();
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();
    const [avatar, setAvatar] = useState()

    useEffect(() => {

        setId(route.params.id);
        setNome(route.params.nome);
        setEmail(route.params.email);
        setTelefone(route.params.telefone);
        setAvatar(route.params.avatar_url)

        
    }, [])

    function alterarDados() {

        axios.put('http://localhost:3000/contatos/' + id, {
            nome: nome,
            telefone: telefone,
            email: email,
            avatar_url: avatar
        }).then(function (response) {
            showMessage({
                message: "Contato alterado com sucesso!",
                type: "success"
            });
            
            navigation.navigate('ListaContato')
        }).catch(function (error) {
            console.log(error);

        });


    }

    function excluirDados() {

        axios.delete('http://localhost:3000/contatos/' + id)
            .then(function (response) {
                showMessage({
                    message: "Contato excluído com sucesso!",
                    type: "success"
                });
                navigation.navigate('ListaContato')
            }).catch(function (error) {
                console.log(error);

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
                    value={nome}
                    containerStyle={{
                        marginVertical: 20,
                        marginTop: 40,
                        paddingHorizontal: 20,
                    }}
                    onChangeText={text => setNome(text)}
                />

                <Input
                    placeholder='E-mail'
                    value={email}
                    containerStyle={{
                        marginVertical: 20,
                        paddingHorizontal: 20,
                    }}
                    onChangeText={text => setEmail(text)}
                />

                <Input
                    placeholder='Telefone'
                    value={telefone}
                    containerStyle={{
                        marginVertical: 20,
                        paddingHorizontal: 20,
                    }}
                    onChangeText={text => setTelefone(text)}
                />

                <Button
                    title="Alterar"
                    buttonStyle={{
                        marginTop: 20,
                        height: 40,
                        width: 250,
                    }}
                    onPress={() => alterarDados()}
                />

                <Button
                    title="Excluir"
                    buttonStyle={{
                        marginTop: 20,
                        height: 40,
                        width: 250,
                        backgroundColor: 'red'
                    }}
                    onPress={() => excluirDados()}
                />

            </View>
            <FlashMessage position="top" />
        </View>

    );
}

export default AlteraContatoScreen;