import { GoogleLogin } from 'react-google-login';
import { signInWithGoogle } from '../withOAuth/signInWithOAuth';

const GoogleBN = () => {
  const googleLog = (onRes) => {
    console.log(onRes);
  };

  return (
    <div className="Go">
      <GoogleLogin
        onFailure={googleLog}
        onSuccess={signInWithGoogle}
        onRequest={signInWithGoogle}
        buttonText="Continue with Google"
        clientId="623333799087-mr69ufuog1ddmua3bsgltcm6e28clg44.apps.googleusercontent.com"
        className="flex h-[52px] w-[364px] items-center justify-center !rounded-md bg-white opacity-100"
      />
    </div>
  );
};

export default GoogleBN;
