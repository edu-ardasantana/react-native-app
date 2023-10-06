import * as ImagePicker from 'expo-image-picker';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getStorage, list, ref, uploadBytes } from "firebase/storage";
import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function StorageScreen({ navigation }) {

  const [imageUri, setImageUri] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [listaLinks,setListaLinks] = useState([]);

  const firebaseConfig = {
    apiKey: "AIzaSyC_DyavpfcaYwBgTLrguwE9mdPb1Yy_IXc",
    authDomain: "aula-app-79f90.firebaseapp.com",
    projectId: "aula-app-79f90",
    storageBucket: "aula-app-79f90.appspot.com",
    messagingSenderId: "605499630230",
    appId: "1:605499630230:web:e78897140355abb98bd8b7",
    measurementId: "G-KKYTCD9PC0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({

      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,

    });

    if (!result.cancelled) {

      setImageUri(result.uri);
      console.log(result.assets);

    }
  };

  const uploadImage = async () => {
    if (!imageUri) {
      Alert.alert('Selecione uma imagem antes de enviar.');
      return;
    }

    // Create a root reference
    const storage = getStorage();

    // Create a reference to 'mountains.jpg'
    var dataAtual = Date.now();
    const mountainsRef = ref(storage, `${dataAtual}`);

    const response = await fetch(imageUri);
    const blob = await response.blob();

    uploadBytes(mountainsRef, blob).then((snapshot) => {
      console.log(snapshot);
    });
  };

  async function LinkImage() {
    // Create a reference under which you want to list
    const storage = getStorage();
    const listRef = ref(storage);
    
    // Fetch the first page of 100.
    const firstPage = await list(listRef, { maxResults: 100 });

    firstPage.items.map((item) =>{ 
    console.log('https://firebasestorage.googleapis.com/v0/b/' +
    item.bucket + '/o/' + item.fullPath + '?alt=media')
    })
    setListaLinks(firstPage.items)
    console.log(listaLinks)
    }

  return (

    
      <View style={{
        flex: 1, alignItems: 'center'
        , justifyContent:
          'center'
      }}>
        <Button title="Escolher Imagem" onPress={pickImage} />
        {imageUri && <Image source={{ uri: imageUri }} style={{
          width: 200, height: 200, marginVertical: 20
        }} />}
        {uploading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Button title="Enviar Imagem" onPress={uploadImage}
            disabled={!imageUri} style={{
              marginVertical: 20
            }} />
        )}
        <Button title="Ver Imagens" onPress={LinkImage} />
        
      </View>
    

  )

}