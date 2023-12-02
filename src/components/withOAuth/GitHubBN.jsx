import GitHubLogin from 'react-github-login';
import { signInWithGitHub } from '../withOAuth/signInWithOAuth';

const GitHubBN = () => {
  const githubLog = (onRes) => {
    console.log(onRes);
  };

  return (
    <div className="flex items-center justify-center">
      <GitHubLogin
        onFailure={githubLog}
        onSuccess={signInWithGitHub}
        onRequest={signInWithGitHub}
        clientId="f425c57cb115808bdbda"
        redirectUri="https://zfggltatdqqlawjczzyp.supabase.co/auth/v1/callback"
        className="flex h-[52px] w-[364px] items-center justify-center rounded-md border-[calc(.06887vw+.67769px)] border-solid border-[rgb(35,134,54)] bg-[rgb(35,134,54)] text-sm font-semibold opacity-100 hover:rounded-md hover:bg-[rgb(46,160,67)]"
      >
        <div className="flex items-center justify-center">
          <span className="mr-2.5 text-2xl">
            <i className="fa fa-github"></i>
          </span>
          <span>Continue with GitHub</span>
        </div>
      </GitHubLogin>
    </div>
  );
};

export default GitHubBN;
