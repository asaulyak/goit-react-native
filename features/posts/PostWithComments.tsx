import { PostWithCommentsProps } from '@/features/posts/types';
import { Image, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Comments } from '@/features/posts/Comments';
import { AntDesign } from '@expo/vector-icons';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/config';
import { useAuth } from '@/common/auth/auth.context';
import {useEffect, useState} from 'react';
import { nanoid } from 'nanoid/non-secure';

export const PostWithComments = ({ post, style }: PostWithCommentsProps) => {
  const [currentPost, setCurrentPost] = useState(post);
  const [comment, setComment] = useState('');
  const { user } = useAuth();

  const handlePostComment = async () => {
    const updatedComments = [
      ...currentPost.comments,
      {
        id: nanoid(),
        author: user,
        text: comment,
        date: new Date().toISOString()
      }
    ];
    await setDoc(doc(db, 'posts', currentPost.id), { comments: updatedComments }, { merge: true });

    const postData = await getDoc(doc(db, 'posts', currentPost.id));

    setCurrentPost(postData.data());

    setComment('');
  };

  return (
    <View style={[styles.view, style]}>
      <View style={styles.content}>
        <Image source={{ uri: currentPost.image }} style={styles.image}></Image>
        <Comments post={currentPost} />
      </View>
      <View style={styles.leaveComment}>
        <TextInput style={styles.input} placeholder="Add a comment..." value={comment} onChangeText={setComment} />
        <TouchableOpacity style={styles.commentSubmit} onPress={handlePostComment}>
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
