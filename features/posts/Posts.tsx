import { StyleSheet, View } from 'react-native';
import { Post } from '@/features/posts/Post';
import { PostsProps } from '@/features/posts/types';

export const Posts = ({ posts }: PostsProps) => {
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
