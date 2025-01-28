import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Posts } from '@/features/posts/Posts';
import { useAuth } from '@/common/auth/auth.context';
import { Feather } from '@expo/vector-icons';
import { ImagePicker } from '@/components/image-picker/ImagePicker';

export const Profile = () => {
  const { signOut, user } = useAuth();
  const handleLogOut = () => signOut();

  return (
    <View style={styles.view}>
      <View style={styles.content}>
        <ImagePicker style={styles.imagePicker} imageUrl={user?.avatar} />

        <View style={styles.topBar}>
          <TouchableOpacity onPress={handleLogOut}>
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>

        <Text style={styles.userName}>{user?.name}</Text>

        <ScrollView style={styles.scrollContainer}>
          <Posts />
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
    width: '100%',
  },
  imagePicker: {
    top: -84,
    marginBottom: -52,
    backgroundColor: 'red'
  },
  userName: {
    fontSize: 30,
    fontWeight: 500,
    color: '#212121',
    marginBottom: 32
  }
});
