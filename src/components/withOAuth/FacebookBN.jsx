import FacebookLogin from 'react-facebook-login';
import { signInWithFacebook } from '../withOAuth/signInWithOAuth';

const FacebookBN = () => {
  const facebookCallback = (callback) => {
    console.log(callback);
  };

  return (
    <div className="fb">
      <FacebookLogin
        callback={facebookCallback}
        onFailure={facebookCallback}
        onClick={signInWithFacebook}
        icon="fa-facebook"
        appId="659437886303200"
        fields="name,email,picture"
        textButton="Continue with Facebook"
      />
    </div>
  );
};
export default FacebookBN;
