import { PrivateLayout } from '@/layouts/private.layout';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeBottomNavBar } from '@/screens/home/HomeBottomNavBar';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import { CreatePostScreen } from '@/screens/posts/CreatePostScreen';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreen } from '@/screens/profile/ProfileScreen';
import { PostsScreen } from '@/screens/posts/PostsScreen';

export const HomeScreen = () => {
  const Tabs = createBottomTabNavigator();

  const navigation = useNavigation();

  const handleBack = () => navigation.goBack();

  return (
    <PrivateLayout>
      <Tabs.Navigator
        tabBar={props => <HomeBottomNavBar {...props} />}
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center'
        }}
      >
        <Tabs.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              const color = getActiveButtonColor(focused);

              return (
                <View style={styles.postsIcon}>
                  <FontAwesome5 name="square" size={7} color={color} style={styles.postsIconPart} />
                  <FontAwesome5 name="square" size={7} color={color} style={styles.postsIconPart} />
                  <FontAwesome5 name="square" size={7} color={color} style={styles.postsIconPart} />
                  <FontAwesome5 name="square" size={7} color={color} style={styles.postsIconPart} />
                </View>
              );
            }
          }}
        />
        <Tabs.Screen
          name="New Post"
          component={CreatePostScreen}
          options={{
            tabBarIcon: ({ focused }) => <AntDesign name="plus" size={13} color={getActiveButtonColor(focused)} />,
            tabBarStyle: { display: 'none' },
            headerLeftContainerStyle: { paddingLeft: 16 },
            headerLeft: () => (
              <TouchableOpacity onPress={handleBack}>
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            )
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => <Feather name="user" size={24} color={getActiveButtonColor(focused)} />,
            headerShown: false
          }}
        />
      </Tabs.Navigator>
    </PrivateLayout>
  );
};

const getActiveButtonColor = (focused: boolean) => {
  const colorActive: string = '#FFF';
  const colorInActive: string = 'rgba(33, 33, 33, 0.8)';

  return focused ? colorActive : colorInActive;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    gap: 32,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 82
  },
  postsIcon: {
    width: 24,
    height: 24,
    padding: 3,
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: 4
  },
  postsIconPart: {
    width: 7,
    height: 7
  }
});
