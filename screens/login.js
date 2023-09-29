import axios from 'axios';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from 'react';
import { View } from 'react-native';
import { Avatar, Button, Input, SocialIcon } from 'react-native-elements';
import FlashMessage, { showMessage } from "react-native-flash-message";
import GoogleButton from 'react-google-button'

function LoginScreen({ navigation }) {

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

    function logar() {

        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigation.navigate('ListaContato')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    const provider = new GoogleAuthProvider();

    function logarComGoogle() {

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                navigation.navigate('ListaContato')
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Avatar
                size='xlarge'
                icon={{ name: 'user', type: 'font-awesome' }}
                rounded
                source={{
                    uri:
                        'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
            />

            <Input
                placeholder='Email'
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
                title="Login"
                buttonStyle={{
                    marginTop: 20,
                    height: 40,
                    width: 250,
                    borderRadius: 60
                }}
                onPress={() => logar()}
            />

            <SocialIcon
                title='Login com Google'
                button
                type='google'
                onPress={() => logarComGoogle()}
                style={{
                    marginTop: 20,
                    height: 40,
                    width: 250
                }}
            />


            <Button
                title="Cadastre-se"
                buttonStyle={{
                    marginTop: 20,
                    height: 30,
                    width: 120,
                    borderRadius: 60
                }}
                onPress={() => navigation.navigate('CadastraUsuario')}
            />

            <FlashMessage position="top" />
        </View>
    );
}

export default LoginScreen;