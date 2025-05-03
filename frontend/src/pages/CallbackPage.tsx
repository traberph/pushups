import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router';

const CallbackPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    // auth.signinRedirect();
  }, [auth]);

  // const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <>
      <button onClick={() => {
        // auth.signinRedirect();
        navigate("/");
      }}>
        continue
      </button>

      <div>Oops... {auth.error.source} caused {auth.error.message}</div>;

    </>
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        Hello {auth.user?.profile.sub}{" "}
        <button onClick={() => void auth.removeUser()}>
          Log out
        </button>
      </div>
    );
  }


  return <p>Signing in...</p>;
};
export default CallbackPage;
