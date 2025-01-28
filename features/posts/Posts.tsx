import { StyleSheet, View } from 'react-native';
import { Post } from '@/features/posts/Post';
import { posts } from '@/features/posts/posts.data';

export const Posts = () => {
  return (
    <View style={styles.view}>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    gap: 32
  }
});
