import { RegistrationFrom } from '@/features/registration/RegistrationFrom';
import { AuthLayout } from '@/layouts/auth.layout';

export const RegistrationScreen = () => {
  return (
    <AuthLayout>
      <RegistrationFrom></RegistrationFrom>
    </AuthLayout>
  );
};
