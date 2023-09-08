import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Input, Button, Text } from 'react-native-elements';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>

            <Avatar
                size="large"
                icon={{ name: 'user', type: 'font-awesome' }}
                rounded
                containerStyle={{ width: 100, height: 100 }}
                source={{
                    uri:
                        'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
            />

            <Button
                title="Inicial"
                onPress={() => navigation.navigate('Inicial')}
            />
        </View>
    );
}

export default HomeScreen;