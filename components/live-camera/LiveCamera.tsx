import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ViewProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';

interface LiveCameraProps extends ViewProps {
  onTakePhoto: (uri: string) => void;
}

export const LiveCamera = ({ onTakePhoto }: LiveCameraProps) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [permissionResponse, requestMediaLibraryPermission] = MediaLibrary.usePermissions();
  const cameraRef = useRef<CameraView>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePhoto = async () => {
    if (permissionResponse?.status !== 'granted') {
      await requestMediaLibraryPermission();
    }

    const photo = await cameraRef.current?.takePictureAsync();

    if (photo) {
      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      updatePhoto(asset.uri);
    }
  };

  const updatePhoto = (uri: string) => {
    setSelectedImage(uri);
    onTakePhoto(uri);
  };

  const activateCamera = () => setSelectedImage(null);

  const handleCameraPress = () => takePhoto();

  const handleBackImagePress = () => activateCamera();

  const handleUploadPress = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images']
    });

    console.log(result);

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      updatePhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.view}>
      <View style={[styles.cameraView]}>
        {selectedImage ? (
          <TouchableOpacity onPress={handleBackImagePress}>
            <ImageBackground style={styles.backImage} source={{ uri: selectedImage }} />
          </TouchableOpacity>
        ) : (
          <CameraView style={styles.camera} facing="back" ref={cameraRef}>
            <TouchableOpacity onPress={handleCameraPress}>
              <View style={styles.circle}>
                <MaterialIcons name="photo-camera" size={20} color="#BDBDBD" />
              </View>
            </TouchableOpacity>
          </CameraView>
        )}
      </View>

      <TouchableOpacity onPress={handleUploadPress}>
        <Text style={styles.uploadTitle}>Upload photo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    gap: 8
  },
  cameraView: {
    height: 240,
    width: '100%',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F6F6F6'
  },
  circle: {
    borderRadius: '50%',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)'
  },
  backImage: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10
  },
  camera: {
    backgroundColor: '#F6F6F6',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  uploadTitle: {
    fontSize: 16,
    color: '#BDBDBD'
  }
});
