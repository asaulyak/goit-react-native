import { PrivateLayout } from '@/layouts/private.layout';
import { PostsList } from '@/features/posts/PostsList';
import { createStackNavigator } from '@react-navigation/stack';
import { CommentsScreen } from '@/screens/comments/CommentsScreen';
import { TouchableOpacity } from 'react-native';
import {AntDesign, Feather} from '@expo/vector-icons';
import {useAuth} from '@/common/auth/auth.context';
import {MapScreen} from '@/screens/map/MapScreen';

const Stack = createStackNavigator();

export const PostsScreen = () => {
  const handleBack = (navigation: ReturnType<useNavigation>) => navigation.navigate('PostsList');
  const { signOut } = useAuth();
  const handleLogOut = () => signOut();

  return (
    <PrivateLayout>
      <Stack.Navigator initialRouteName="PostsList" screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="PostsList"
          component={PostsList}
          options={{
            headerTitleAlign: 'center',
            title: 'Posts',
            headerRightContainerStyle: { paddingRight: 16 },
            headerRight: () => (
              <TouchableOpacity onPress={handleLogOut}>
                <Feather name="log-out" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            )
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Comments"
          component={CommentsScreen}
          options={({navigation}) => ({
            headerTitleAlign: 'center',
            headerLeftContainerStyle: { paddingLeft: 16 },
            headerLeft: () => (
              <TouchableOpacity onPress={() => handleBack(navigation)}>
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            )
          })}
        ></Stack.Screen>
        <Stack.Screen name="Map" component={MapScreen}></Stack.Screen>
      </Stack.Navigator>
    </PrivateLayout>
  );
};
