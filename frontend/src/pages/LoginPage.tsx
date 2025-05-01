import { useAuth } from 'react-oidc-context';
import Button from '../components/Button';

const LoginPage = () => {
  const auth = useAuth();

  if (auth.isLoading) return <p>Loading...</p>;
  if (auth.error) return <p>Error: {auth.error.message}</p>;

  if (!auth.isAuthenticated) {
    return (
      <Button onClick={() => auth.signinRedirect()}>Login pls</Button>
    );
  }

  return (
    <div>
      <p>Welcome, {auth.user?.profile.name}</p>
      <Button onClick={() => auth.signoutRedirect()}>Logout</Button>
    </div>
  );
};

export default LoginPage;