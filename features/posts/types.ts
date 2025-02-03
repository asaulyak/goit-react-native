import { ViewProps } from 'react-native';
import { LocationObject } from 'expo-location';

export interface TComment {
  id: string;
  author: User;
  text: string;
  date: string;
}

export interface PostLocation {
  address: string;
  geo: {
    lat: number;
    lng: number;
  };
}

export interface TPost {
  id: string;
  title: string;
  image: string;
  comments: TComment[];
  likesNumber: number;
  location: PostLocation;
  author: User;
}

export interface PostProps {
  post: TPost;
  showLikes?: boolean;
}

export interface PostsProps extends ViewProps {
  posts: TPost[];
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
