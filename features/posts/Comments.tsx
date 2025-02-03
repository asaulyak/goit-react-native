import { CommentAlignment, CommentsProps } from '@/features/posts/types';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Comment } from './Comment';

export const Comments = ({ post }: CommentsProps) => {
  const { comments, author } = post;

  return (
    <View style={[styles.view]}>
      <ScrollView>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            style={styles.comment}
            comment={comment}
            alignment={comment.author.id === author.id ? CommentAlignment.Right : CommentAlignment.Left}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {},
  comment: {
    marginBottom: 24
  }
});
