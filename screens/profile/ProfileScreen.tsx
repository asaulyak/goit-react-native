import { AuthLayout } from '@/layouts/auth.layout';
import { Profile } from '@/features/profile/Profile';
import { StyleSheet } from 'react-native';

export const ProfileScreen = () => {
  return (
    <AuthLayout style={styles.layout}>
      <Profile />
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  layout: {
    alignItems: 'flex-start',
  }
});
