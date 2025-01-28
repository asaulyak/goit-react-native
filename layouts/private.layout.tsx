import { SafeAreaView, StyleSheet, ViewProps } from 'react-native';

export const PrivateLayout = ({ children, style }: ViewProps) => {
  return <SafeAreaView style={[styles.view, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
