import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Avatar, Header, Icon, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-web';
import { getAuth, signOut } from "firebase/auth";

function ListaContatoScreen({ navigation }) {

    const [contact,setContact] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        
        consultarDados();

        function consultarDados() {

            axios.get('http://localhost:3000/contatos')
    
                .then(function (response) {
                   setContact(response.data);
                }).catch(function (error) {
                    console.log(error);
    
                });
    
        }

    }, [isFocused])

    const auth = getAuth();

    function logout() {

        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.navigate('Login')
            }).catch((error) => {
            // An error happened.
            });

    }
  

    return (

        <ScrollView>
            <Header
                centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff', fontWeight: 'bold', fontSize: '25px' } }}
                rightComponent={
                    <Icon
                        name='logout'
                        color={'#fff'}
                        size={25}
                        onPress={() => logout() }
                    />
                }
                leftComponent={
                    <Icon
                        name='add'
                        color={'#fff'}
                        size={30}
                        onPress={() => navigation.navigate('CadastraContato')}
                    />
                }
            />
            <View >
                {
                    contact.map((l, i) => (
                        <ListItem key={i} bottomDivider onPress={() => navigation.navigate('AlteraContato',
                            {
                                id: l.id,
                                nome: l.nome,
                                email: l.email,
                                telefone: l.telefone,
                                avatar_url: l.avatar_url
                            })}>
                            <Avatar
                                rounded
                                source={{ uri: l.avatar_url }}
                                icon={{ name: 'user', type: 'font-awesome' }}
                            />
                            <ListItem.Content>
                                <ListItem.Title>{l.nome}</ListItem.Title>
                                <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }

            </View>
        </ScrollView>
    );
}

export default ListaContatoScreen;