import { Image, StyleSheet, TouchableOpacity, View, ViewProps } from 'react-native';
import { PlusSvg } from '@/components/svg/Plus';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from '@/common/auth/auth.context';
import { getDownloadURL, ref, uploadBytes } from '@firebase/storage';
import { storage } from '@/config';
import { nanoid } from 'nanoid/non-secure';
import {useState} from 'react';

interface ImagePickerProps extends ViewProps {
  imageUrl?: string;
  onUpload?: (url: string) => void;
}

export const ImageUploader = ({ style, imageUrl, onUpload }: ImagePickerProps) => {
  const [image, setImage] = useState(imageUrl);

  console.log('image', image);
  const { user } = useAuth();

  const handleUploadPress = async () => {
    const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images']
    });

    if (canceled) {
      return;
    }

    try {
      const userId = user?.id || nanoid();
      const [asset] = assets || [];

      const response = await fetch(asset.uri);
      const file = await response.blob();
      const fileName = asset.uri.split('/').pop();

      console.log('asset', asset);

      const imageRef = ref(storage, `avatars/${userId}/${fileName}`);
      await uploadBytes(imageRef, file);

      const url = await getDownloadURL(imageRef);

      setImage(url);
      onUpload?.(url);
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  return (
    <View style={[styles.rect, style]}>
      {image && <Image style={styles.image} source={{ uri: image }} />}
      <TouchableOpacity onPress={handleUploadPress} style={styles.plusIcon}>
        <PlusSvg />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rect: {
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
    borderRadius: 16,
    position: 'relative'
  },
  plusIcon: {
    position: 'absolute',
    width: 25,
    height: 25,
    right: -12,
    bottom: 14
  },
  image: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: '100%',
    borderRadius: 16
  }
});
