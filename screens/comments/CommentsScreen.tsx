import { PrivateLayout } from '@/layouts/private.layout';
import { PostWithComments } from '@/features/posts/PostWithComments';
import { posts } from '@/features/posts/posts.data';
import { StyleSheet } from 'react-native';

export const CommentsScreen = () => {
  const [post] = posts;

  return (
    <PrivateLayout>
      <PostWithComments style={styles.view} post={post}></PostWithComments>
    </PrivateLayout>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 16,
    paddingVertical: 32
  }
});
