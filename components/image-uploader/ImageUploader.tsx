import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';

export const ImageUploader = () => {
  return (
    <View style={styles.view}>
      <View style={styles.dropArea}>
        <View style={styles.circle}>
          <MaterialIcons name="photo-camera" size={20} color="#BDBDBD" />
        </View>
      </View>
      <Text style={styles.subTitle}>Upload photo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    gap: 8,
  },
  dropArea: {
    backgroundColor: '#F6F6F6',
    height: 240,
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E8E8E8',
    borderWidth: 1
  },
  circle: {
    borderRadius: '50%',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  subTitle: {
    fontSize: 16,
    color: '#BDBDBD'
  }
});
