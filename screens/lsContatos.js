import * as React from 'react';
import { View } from 'react-native';
import { Avatar, ListItem, Header, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-web';


const list = [
    {
        name: 'Marcos Andrade',
        avatar_url: 'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'email@email',
        telefone: '81 988553423'
    },
    {
        name: 'Patrícia Tavares',
        avatar_url: 'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'email@email',
        telefone: '81 998765332'
    },
    {
        name: 'Rodrigo Antunes',
        avatar_url: 'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'email@email',
        telefone: '81 987765525'
    },
    {
        name: 'Pedro',
        avatar_url: 'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'email@email',
        telefone: '81 987765525'
    },
    {
        name: 'João',
        avatar_url: 'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'email@email',
        telefone: '81 987765525'
    },
    {
        name: 'Maria',
        avatar_url: 'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'email@email',
        telefone: '81 987765525'
    },
    {
        name: 'Gabriel',
        avatar_url: 'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'email@email',
        telefone: '81 987765525'
    },
    {
        name: 'Joana',
        avatar_url: 'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'email@email',
        telefone: '81 987765525'
    },
    {
        name: 'Felipe',
        avatar_url: 'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'email@email',
        telefone: '81 987765525'
    },
    {
        name: 'Ana',
        avatar_url: 'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'email@email',
        telefone: '81 987765525'
    },
    {
        name: 'José',
        avatar_url: 'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'email@email',
        telefone: '81 987765525'
    }
]

function LsContatosScreen({ navigation }) {
    return (

        <ScrollView>
            <Header
                centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff', fontWeight: 'bold', fontSize: '25px' } }}
                rightComponent={
                    <Icon
                        name='add'
                        color={'#fff'}
                        size={30}
                        onPress={() => navigation.navigate('Contato')}
                    />
                }
            />
            <View >
                {
                    list.map((l, i) => (
                        <ListItem key={i} bottomDivider onPress={() => navigation.navigate('UpDel',
                        {
                            nome:l.name,
                            email:l.subtitle,
                            telefone:l.telefone
                        })}>
                            <Avatar
                                rounded
                                source={{ uri: l.avatar_url }}
                                icon={{ name: 'user', type: 'font-awesome' }}
                            />
                            <ListItem.Content>
                                <ListItem.Title>{l.name}</ListItem.Title>
                                <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }

            </View>
        </ScrollView>
    );
}

export default LsContatosScreen;