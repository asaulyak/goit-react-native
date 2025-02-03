import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PostProps, TPost } from '@/features/posts/types';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const Post = ({ post }: PostProps) => {
  const navigation = useNavigation();

  const handleCommentPress = () =>
    navigation.navigate('Comments', {
      post
    });

  const handleLocationPress = () => {
    const {
      location: { address, geo },
      title
    } = post;

    navigation.navigate('Map', {
      location: {
        ...geo,
        address,
        title
      }
    });
  };

  return (
    <View style={styles.view}>
      <Image source={{ uri: post.image }} style={styles.image}></Image>
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.info}>
        <View style={styles.social}>
          <TouchableOpacity style={styles.comments} onPress={handleCommentPress}>
            <EvilIcons name="comment" size={18} color="#BDBDBD" />
            <Text style={styles.commentsTitle}>{post.comments.length}</Text>
          </TouchableOpacity>
          <View style={styles.likes}>
            <AntDesign name="like2" size={18} color="#BDBDBD" />
            <Text style={styles.commentsTitle}>{post.likesNumber}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.location} onPress={handleLocationPress}>
          <EvilIcons name="location" size={18} color="#BDBDBD" />
          <Text style={styles.locationTitle}>{post.location.address}</Text>
        </TouchableOpacity>
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
