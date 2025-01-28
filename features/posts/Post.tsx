import { View, Image, Text, StyleSheet } from 'react-native';
import { PostProps } from '@/features/posts/types';
import { AntDesign, EvilIcons } from '@expo/vector-icons';

export const Post = ({ post }: PostProps) => {
  return (
    <View style={styles.view}>
      <Image source={{ uri: post.image }} style={styles.image}></Image>
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.info}>
        <View style={styles.social}>
          <View style={styles.comments}>
            <EvilIcons name="comment" size={18} color="#BDBDBD" />
            <Text style={styles.commentsTitle}>{post.comments.length}</Text>
          </View>
          <View style={styles.likes}>
            <AntDesign name="like2" size={18} color="#BDBDBD" />
            <Text style={styles.commentsTitle}>{post.likesNumber}</Text>
          </View>
        </View>
        <View style={styles.location}>
          <EvilIcons name="location" size={18} color="#BDBDBD" />
          <Text style={styles.locationTitle}>{post.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    gap: 8
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 8
  },
  title: {
    fontWeight: 500,
    fontSize: 16,
    color: '#212121'
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 20
  },
  social: {
    flexDirection: 'row',
    gap: 24
  },
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  commentsTitle: {
    color: '#BDBDBD'
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  locationTitle: {
    color: '#212121',
    fontSize: 16,
    fontWeight: 400
  }
});
