import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Input, Button, Text, Header } from 'react-native-elements';

function TesteScreen({ navigation }) {
    return (
        <View>
            <Header
                    centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'add', color: '#fff' }}
                />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {
            list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{list.name}</ListItem.Title>
                        <ListItem.Subtitle>{list.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            ))
        }

        </View>
        </View>

    );
}

export default TesteScreen;