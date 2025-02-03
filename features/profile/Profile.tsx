import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Posts } from '@/features/posts/Posts';
import { useAuth } from '@/common/auth/auth.context';
import { Feather } from '@expo/vector-icons';
import { ImageUploader } from '@/components/image-picker/ImageUploader';
import {collection, doc, getDoc, getDocs, setDoc} from 'firebase/firestore';
import { db } from '@/config';
import { useEffect, useState } from 'react';
import {fetchAuthorPosts} from '@/features/posts/posts.service';

export const Profile = () => {
  const { signOut, user } = useAuth();
  const handleLogOut = () => signOut();

  const handleImageUpload = async (avatar: string) => {
    await setDoc(doc(db, 'users', user.id), { avatar }, { merge: true });
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchAuthorPosts(user.id).then(data => setPosts(data));
  }, []);

  return (
    <View style={styles.view}>
      <View style={styles.content}>
        <ImageUploader style={styles.imagePicker} imageUrl={user?.avatar} onUpload={handleImageUpload} />

        <View style={styles.topBar}>
          <TouchableOpacity onPress={handleLogOut}>
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>

        <Text style={styles.userName}>{user?.name}</Text>

        <ScrollView style={styles.scrollContainer}>
          <Posts posts={posts} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    paddingTop: 150
  },
  content: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 25,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1
  },
  topBar: {
    position: 'absolute',
    paddingTop: 24,
    width: '100%',
    alignItems: 'flex-end'
  },
  scrollContainer: {
    width: '100%'
  },
  imagePicker: {
    top: -84,
    marginBottom: -52
  },
  userName: {
    fontSize: 30,
    fontWeight: 500,
    color: '#212121',
    marginBottom: 32
  }
});
