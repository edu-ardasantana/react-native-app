import * as React from 'react';
import { View, Text,Button } from 'react-native';

function InicialScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Inicial Screen</Text>
            <Button
                title="Voltar"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

export default InicialScreen;