import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export const HomeBottomNavBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const currentRoute = state.routes[state.index];
  const { tabBarStyle } = descriptors[currentRoute.key].options;

  return (
    <View style={[styles.view, tabBarStyle]}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;

        const { tabBarIcon } = descriptors[route.key].options;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key
          });

          if (!event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={[styles.navButton, state.index === index ? styles.navButtonActive : undefined]}
            onPress={onPress}
          >
            {tabBarIcon && tabBarIcon({ focused })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderTopWidth: 1,
    borderColor: '#BDBDBD',
    flexDirection: 'row',
    paddingTop: 9,
    backgroundColor: 'transparent'
  },
  hidden: {
    display: 'none'
  },
  navButton: {
    borderRadius: 20,
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navButtonActive: {
    backgroundColor: '#FF6C00'
  }
});
