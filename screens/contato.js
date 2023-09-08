import * as React from 'react';
import { View } from 'react-native';
import { Input, Button, Header, Icon } from 'react-native-elements';

function ContatoScreen({ navigation }) {
    return (
            <View>

                <Header

                    leftComponent={
                        <Icon
                            name='arrow-back'
                            color={'#fff'}
                            size={30}
                            onPress={() => navigation.navigate('LsContatos')}
                        />
                    }
                    centerComponent={{ text: 'Contato', style: { color: '#fff' , fontWeight: 'bold', fontSize: '30px'} }}
                    
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <Input
                        placeholder='Nome'
                        containerStyle={{
                            marginVertical: 20,
                            marginTop:40,
                            paddingHorizontal: 20,
                        }}
                    />

                    <Input
                        placeholder='E-mail'
                        containerStyle={{
                            marginVertical: 20,
                            paddingHorizontal: 20,
                        }}
                    />

                    <Input
                        placeholder='Telefone'
                        containerStyle={{
                            marginVertical: 20,
                            paddingHorizontal: 20,
                        }}
                    />

                    <Button
                    title="Salvar"
                    buttonStyle={{
                        marginTop: 20,
                        height:40,
                        width:250,                        
                    }}
                    />

                </View>

            </View>

    );
}

export default ContatoScreen;