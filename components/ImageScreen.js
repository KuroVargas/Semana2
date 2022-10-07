import * as React from 'react';
import {Image, View, Text, Button } from "native-base";
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import * as ImageManipulator from "expo-image-manipulator";
import {Platform} from 'react-native';


const ImageScreen= ()=> {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openImagePickerAsync = async () => {    
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
     if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  }

  let openShareDialogAsync = async () => {
    if (Platform.OS === 'web') {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    const imageTmp = await ImageManipulator.manipulateAsync(selectedImage.localUri);
    await Sharing.shareAsync(imageTmp.uri);
  };

  if (selectedImage !== null) {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center',marginHorizontal: 15 }}>
        <Image source={{ uri: selectedImage.localUri }} style={{ width: 300,  height: 300, resizeMode: "contain"}} alt="Image of your computer " />
        <Button  onPress={openShareDialogAsync}  style={{ backgroundColor: 'blue', padding: 20, borderRadius: 5}}>
          <Text style={{ fontSize: 20, color: '#fff' }}>Share this photo</Text>
        </Button>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center',marginHorizontal: 15 }}>
      <Image source={{ uri: "https://docs.expo.dev/static/images/tutorial/logo.png" }} style={{ width: 305, height: 159, marginBottom:10}} alt="Internet image" />
      <Text style={{ color: '#888', fontSize: 18 }} >To share a photo from your phone with a friend, just press the button below!</Text>

      <Button  onPress={openImagePickerAsync}  style={{ backgroundColor: 'blue', padding: 20, borderRadius: 5}}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </Button>
    </View>
  );
}
export default ImageScreen;