import { db } from '@/config';
import {collection, getDocs, where} from 'firebase/firestore';
import {query} from '@firebase/database';

export const fetchAuthorPosts = async (authorId: string) => {
  try {
    const postsRef = collection(db, 'posts');
    const authorQuery = query(postsRef, where('author.id', '==', authorId));
    const snapshot = await getDocs(authorQuery);

    const posts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log('posts', posts);

    return posts;
  } catch (error) {
    console.log(error);
    return [];
  } finally {
    console.log('done');
  }
};
