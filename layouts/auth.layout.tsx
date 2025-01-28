import { ImageBackground, Keyboard, StyleSheet, TouchableWithoutFeedback, View, ViewProps } from 'react-native';

export const AuthLayout = ({ children, style }: ViewProps) => {
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={require('@/assets/images/main_bg.jpeg')} style={styles.backgroundImage}>
          <View style={[styles.view, style]}>{children}</View>
        </ImageBackground>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backgroundImage: { width: '100%', height: '100%' },
  view: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    height: '100%'
  }
});
