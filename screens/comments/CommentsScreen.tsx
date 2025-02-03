import { PrivateLayout } from '@/layouts/private.layout';
import { PostWithComments } from '@/features/posts/PostWithComments';
import { StyleSheet } from 'react-native';
import { TPost } from '@/features/posts/types';
import { StackScreenProps } from '@react-navigation/stack';

type CommentsParamsList = {
  post: TPost;
};

type CommentsScreenProps = StackScreenProps<CommentsParamsList>;

export const CommentsScreen = ({ route }: CommentsScreenProps) => {
  const {post} = route.params;

  return (
    <PrivateLayout>
      <PostWithComments style={styles.view} post={post}></PostWithComments>
    </PrivateLayout>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 16,
    paddingVertical: 32
  }
});
