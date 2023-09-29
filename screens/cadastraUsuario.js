import axios from 'axios';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Header, Icon, Input } from 'react-native-elements';
import FlashMessage, { showMessage } from "react-native-flash-message";


function CadastraUsuarioScreen({ navigation }) {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const firebaseConfig = {
        apiKey: "AIzaSyC_DyavpfcaYwBgTLrguwE9mdPb1Yy_IXc",
        authDomain: "aula-app-79f90.firebaseapp.com",
        projectId: "aula-app-79f90",
        storageBucket: "aula-app-79f90.appspot.com",
        messagingSenderId: "605499630230",
        appId: "1:605499630230:web:e78897140355abb98bd8b7",
        measurementId: "G-KKYTCD9PC0"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const auth = getAuth();

    function inserirDados() {

        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                showMessage({
                    message: "Usuário cadastrado com sucesso!",
                    type: "success"
                });
                navigation.navigate('Login')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
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
                        onPress={() => navigation.navigate('Login')}
                    />
                }
                centerComponent={{ text: 'Usuário', style: { color: '#fff', fontWeight: 'bold', fontSize: '30px' } }}

            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Input
                    placeholder='e-mail'
                    containerStyle={{
                        marginVertical: 20,
                        paddingHorizontal: 20,
                    }}
                    onChangeText={text => setEmail(text)}
                    value={email}
                />

                <Input
                    placeholder='Senha'
                    secureTextEntry={true}
                    containerStyle={{
                        marginVertical: 20,
                        paddingHorizontal: 20,
                    }}
                    onChangeText={text => setSenha(text)}
                    value={senha}
                />

                <Button
                    title="Salvar"
                    onPress={() => inserirDados()}
                    buttonStyle={{
                        marginTop: 20,
                        height: 40,
                        width: 250,
                    }}
                />

            </View>
            <FlashMessage position="top" />
        </View>

    );
}

export default CadastraUsuarioScreen;