import * as React from 'react';
import { View } from 'react-native';
import { Input, Button, Header, Icon } from 'react-native-elements';

function CadastroScreen({ navigation }) {




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
                />

                <Input
                    placeholder='CPF'
                    containerStyle={{
                        marginVertical: 20,
                        paddingHorizontal: 20,
                    }}
                />

                <Input
                    placeholder='e-mail'
                    containerStyle={{
                        marginVertical: 20,
                        paddingHorizontal: 20,
                    }}
                />

                <Input
                    placeholder='Senha'
                    secureTextEntry={true}
                    containerStyle={{
                        marginVertical: 20,
                        paddingHorizontal: 20,
                    }}
                />

                <Button
                    title="Salvar"
                    buttonStyle={{
                        marginTop: 20,
                        height: 40,
                        width: 250,
                    }}
                />

            </View>

        </View>

    );
}

export default CadastroScreen;