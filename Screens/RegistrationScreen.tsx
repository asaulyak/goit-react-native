import { ImageBackground, View, StyleSheet } from 'react-native';
import { RegistrationFrom } from '@/features/registration/RegistrationFrom';

export const RegistrationScreen = () => {
  return (
    <View>
      <ImageBackground source={require('@/assets/images/main_bg.jpeg')} style={styles.backgroundImage}>
        <View style={styles.registrationFormView}>
          <RegistrationFrom></RegistrationFrom>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: { width: '100%', height: '100%' },
  registrationFormView: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    height: '100%'
  }
});
