import 'react-native-gesture-handler';
import { AuthNavigator } from '@/navigators/auth.navigator';
import { PrivateNavigator } from '@/navigators/private.navigator';
import { useAuth } from '@/common/auth/auth.context';

export default function Index() {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? <PrivateNavigator /> : <AuthNavigator />}</>;
}
