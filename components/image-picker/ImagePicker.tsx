import { StyleSheet, View, ViewProps } from 'react-native';
import { PlusSvg } from '@/components/svg/Plus';

export const ImagePicker = ({ style }: ViewProps) => {
  return (
    <View style={[styles.rect, style]}>
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
    position: 'relative'
  },
  plusIcon: {
    position: 'absolute',
    width: 25,
    height: 25,
    right: -12,
    bottom: 14
  }
});
