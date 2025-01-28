import { PrivateLayout } from '@/layouts/private.layout';
import { CreatePost } from '@/features/posts/CreatePost';
import { StyleSheet } from 'react-native';

export const CreatePostScreen = () => {
  return (
    <PrivateLayout style={styles.view}>
      <CreatePost />
    </PrivateLayout>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '100%'
  }
});
