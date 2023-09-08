import React,{useEffect,useState} from 'react';
import { View } from 'react-native';
import { Input, Button, Header, Icon } from 'react-native-elements';

function UpDelScreen({ navigation, route }) {

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();

    useEffect(() => {
        if (route.params) {
            const { nome } = route.params;
            setNome(nome);

            const { email } = route.params;
            setEmail(email);

            const { telefone } = route.params;
            setTelefone(telefone);
        }
    }, [])

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
                />

                <Input
                    placeholder='E-mail'
                    value={email}
                    containerStyle={{
                        marginVertical: 20,
                        paddingHorizontal: 20,
                    }}
                />

                <Input
                    placeholder='Telefone'
                    value={telefone}
                    containerStyle={{
                        marginVertical: 20,
                        paddingHorizontal: 20,
                    }}
                />

                <Button
                    title="Alterar"
                    buttonStyle={{
                        marginTop: 20,
                        height: 40,
                        width: 250,
                    }}
                />

                <Button
                    title="Excluir"
                    buttonStyle={{
                        marginTop: 20,
                        height: 40,
                        width: 250,
                        backgroundColor: 'red'
                    }}
                />

            </View>

        </View>

    );
}

export default UpDelScreen;