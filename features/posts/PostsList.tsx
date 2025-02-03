import { ScrollView, StyleSheet, View } from 'react-native';
import { PostAuthor } from './PostAuthor';
import { Posts } from '@/features/posts/Posts';
import { useEffect, useState } from 'react';
import { fetchAuthorPosts } from '@/features/posts/posts.service';
import { useAuth } from '@/common/auth/auth.context';

export const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchAuthorPosts(user.id).then(data => setPosts(data));
  }, []);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.view}>
        <PostAuthor author={user}></PostAuthor>
        <Posts posts={posts} />
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
