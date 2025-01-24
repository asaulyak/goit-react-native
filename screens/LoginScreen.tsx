import { LoginForm } from '@/features/login/LoginForm';
import { AuthLayout } from '@/layouts/auth.layout';

export const LoginScreen = () => {
  return (
    <AuthLayout>
      <LoginForm></LoginForm>
    </AuthLayout>
  );
};
