import Index from '@/app/index';
import { AuthProvider } from '@/common/auth/auth.context';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Index />
    </AuthProvider>
  );
}
