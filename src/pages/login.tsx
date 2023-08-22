import { PageLayout } from '@/components/layout';
import LoginContent from '@/components/pages/login/LoginContent';

const Login = () => {
  return (
    <PageLayout pageName='login'>
      <h1>Login page</h1>

      <LoginContent />
    </PageLayout>
  );
};

export default Login;
