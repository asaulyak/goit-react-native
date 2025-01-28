import { Image, StyleSheet, Text, View } from 'react-native';
import { CommentAlignment, CommentProps } from '@/features/posts/types';

export const Comment = ({ comment, alignment, style }: CommentProps) => {
  return (
    <View style={[styles.view, alignment === CommentAlignment.Right && styles.rightAligned, style]}>
      <Image style={styles.avatar} source={{ uri: comment.author.avatar }} />
      <View style={styles.comment}>
        <Text style={styles.commentText}>{comment.text}</Text>
        <Text style={[styles.commentDate, alignment === CommentAlignment.Right && styles.commentDateRightAligned]}>
          {comment.date}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    gap: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  rightAligned: {
    flexDirection: 'row-reverse'
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14
  },
  comment: {
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    padding: 16,
    borderRadius: 6,
    gap: 8,
    flex: 1
  },
  commentText: {
    color: '#212121',
    fontSize: 13,
    lineHeight: 18
  },
  commentDate: {
    color: '#BDBDBD',
    fontSize: 10,
    textAlign: 'right'
  },
  commentDateRightAligned: {
    textAlign: 'left'
  }
});
