import { ScrollView, StyleSheet, View } from 'react-native';
import { user } from '@/features/posts/posts.data';
import { PostAuthor } from './PostAuthor';
import { Posts } from '@/features/posts/Posts';

export const PostsList = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.view}>
        <PostAuthor author={user}></PostAuthor>
        <Posts />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#fff'
  },
  view: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 32,
    gap: 32
  }
});
