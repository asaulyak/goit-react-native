import { ViewProps } from 'react-native';

export interface TComment {
  id: string;
  author: User;
  text: string;
  date: string;
}

export interface TPost {
  id: string;
  title: string;
  image: string;
  comments: TComment[];
  likesNumber: number;
  location: string;
  author: User;
}

export interface PostProps {
  post: TPost;
  showLikes?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface PostAuthorProps extends ViewProps {
  author: User;
}

export interface CommentProps extends ViewProps {
  comment: TComment;
  alignment: CommentAlignment;
}

export enum CommentAlignment {
  Left = 'left',
  Right = 'right'
}

export interface CommentsProps extends ViewProps {
  post: TPost;
}

export interface PostWithCommentsProps extends ViewProps {
  post: TPost;
}
