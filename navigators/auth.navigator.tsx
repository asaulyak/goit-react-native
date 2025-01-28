import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '@/screens/login/LoginScreen';
import { RegistrationScreen } from '@/screens/signup/RegistrationScreen';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="Signup" component={RegistrationScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
