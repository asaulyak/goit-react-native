import { PostWithCommentsProps } from '@/features/posts/types';
import { Image, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Comments } from '@/features/posts/Comments';
import { AntDesign } from '@expo/vector-icons';

export const PostWithComments = ({ post, style }: PostWithCommentsProps) => {
  return (
    <View style={[styles.view, style]}>
      <View style={styles.content}>
        <Image source={{ uri: post.image }} style={styles.image}></Image>
        <Comments post={post} />
      </View>
      <View style={styles.leaveComment}>
        <TextInput style={styles.input} placeholder="Add a comment..." />
        <TouchableOpacity style={styles.commentSubmit}>
          <AntDesign name="arrowup" size={14} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    gap: 32,
    justifyContent: 'space-between',
    height: '100%'
  },
  content: {
    gap: 32,
    flex: 1,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 8
  },
  leaveComment: {
    width: '100%',
    height: 50,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center'
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    color: '#BDBDBD'
  },
  commentSubmit: {
    width: 34,
    height: 34,
    backgroundColor: '#FF6C00',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
