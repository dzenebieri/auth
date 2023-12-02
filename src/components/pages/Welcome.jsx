import FacebookUser from '../withOAuth/FacebookUser';
import GoogleUser from '../withOAuth/GoogleUser';
import GitHubUser from '../withOAuth/GitHubUser';
import Header from '../ui/Header';
import Loader from '../ui/Loader';
import supabase from '../services/supabase';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Welcome() {
  const navigate = useNavigate();
  const { emailUser, authedUser } = useAuth();
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const isAuthedFun = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      try {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
          throw new Error(error.message);
        }

        if (!data?.user) {
          navigate('/auth');
          return;
        }

        setIsAuthed(true);
        authedUser(data.user);
      } catch (error) {
        console.error(error);
        navigate('/auth');
      }
    };

    isAuthedFun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthed) {
    return <Loader />;
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[rgb(28,28,28)] text-lg font-semibold text-[rgb(237,237,237)]">
      <Header />
      <FacebookUser />
      <GoogleUser />
      <GitHubUser />
      {emailUser.app_metadata.provider === 'email' ? (
        <div className="flex flex-col items-center justify-center gap-1 capitalize text-[rgb(62,207,142)]">
          <span>Hey {emailUser.user_metadata.username} !</span>
          <div>
            <p className="flex items-center gap-1">
              Welcome world wide web
              <span className="material-symbols-outlined">public</span>
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
