import { PrivateLayout } from '@/layouts/private.layout';
import { PostsList } from '@/features/posts/PostsList';

export const PostsScreen = () => {
  return (
    <PrivateLayout>
      <PostsList></PostsList>
    </PrivateLayout>
  );
};
