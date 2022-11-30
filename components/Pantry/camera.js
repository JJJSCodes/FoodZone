import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { ActivityIndicator, StyleSheet, Text, SafeAreaView, TouchableOpacity, View, RecyclerViewBackedScrollView } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons'; 
import Header from '../Header';

export default function CameraScan({ navigation, route: { params } }) {
  const [loading, setLoading] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const ref = useRef();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }


  if (!permission.granted) {
    return (
      requestPermission()
    );
  }


  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={ref}>
        <View style={styles.buttonContainer}>
          {!loading && <TouchableOpacity style={styles.button} onPress={() => {
            setLoading(true);
            ref.current.pausePreview();
            ref.current.takePictureAsync().then((uri) => {
              setLoading(false);
              navigation.navigate("CamReview", { uri: uri, ...params });
            }).catch((err) => {
              console.log(err)
              setLoading(false);
            }).finally(() => {
              ref.current.resumePreview();
              resolve();
            })
          }}>
            <View style={{ width: 65, height: 65, borderWidth: 1, borderColor: 'black', borderRadius: 65/2 }} />
          </TouchableOpacity>}
        </View>
      </Camera>
      {loading && <ActivityIndicator style={{ position: 'absolute', alignSelf: 'center' }} size="large" color="black" />}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={35} color='white' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 64,
  },
  button: {
    width: 75,
    height: 75,
    borderRadius: 22,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    borderRadius: 75 / 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: "orange",
    padding: 10
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: '10%',
    width: 35,
    marginLeft: 28,
  },
});
