import { Image, StyleSheet, Text, View } from 'react-native';
import { PostAuthorProps } from '@/features/posts/types';

export const PostAuthor = ({ author, style }: PostAuthorProps) => {
  return (
    <View style={[styles.view, style]}>
      <Image source={{ uri: author.avatar }} width={60} height={60} style={styles.image}></Image>
      <View>
        <Text style={styles.name}>{author.name}</Text>
        <Text style={styles.email}>{author.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  image: {
    borderRadius: 16
  },
  name: {
    fontSize: 13,
    fontWeight: 700,
    color: '#212121'
  },
  email: {
    fontSize: 11,
    fontWeight: 400,
    color: 'rgba(33, 33, 33, 0.8)'
  }
});
