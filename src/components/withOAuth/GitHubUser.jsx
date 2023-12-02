import supabase from '../services/supabase';
import { useEffect, useState } from 'react';

export default function GitHubUser() {
  const [gh_user, setGhUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        setGhUser(
          data?.user.app_metadata.provider === 'github' ? data.user : null,
        );
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, []);

  if (!gh_user) {
    return null;
  }

  const {
    // eslint-disable-next-line no-unused-vars
    role: gh_authed,
    user_metadata: gh_user_metadata,
    app_metadata: gh_app_metadata,
  } = gh_user;
  // eslint-disable-next-line no-unused-vars
  const { provider: gh_provider } = gh_app_metadata || {};
  const { user_name: gh_user_name, avatar_url: gh_user_avatar } =
    gh_user_metadata || {};

  console.log(gh_user);

  return (
    <div>
      {gh_user ? (
        <div className="flex flex-col items-center justify-center">
          <img
            src={gh_user_avatar}
            alt={`${gh_user_name}'s Avatar`}
            className="mb-2 w-32 rounded-full"
          />
          <div className="flex flex-col items-center justify-center gap-1 capitalize text-[rgb(62,207,142)]">
            <span>Hey {gh_user_name} !</span>
            <div>
              <p className="flex items-center gap-1">
                welcome world wide web
                <span className="material-symbols-outlined">public</span>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
