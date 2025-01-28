import {Image, StyleSheet, View, ViewProps} from 'react-native';
import { PlusSvg } from '@/components/svg/Plus';

interface ImagePickerProps extends ViewProps {
  imageUrl?: string;
}

export const ImagePicker = ({ style, imageUrl }: ImagePickerProps) => {
  return (
    <View style={[styles.rect, style]}>
      {imageUrl && <Image style={styles.image} source={{ uri: imageUrl }} />}
      <PlusSvg style={styles.plusIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  rect: {
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
    borderRadius: 16,
    position: 'relative',
  },
  plusIcon: {
    position: 'absolute',
    width: 25,
    height: 25,
    right: -12,
    bottom: 14
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,

  }
});
