import supabase from '../services/supabase';
import { useEffect, useState } from 'react';

export default function GoogleUser() {
  const [go_user, setGoUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        setGoUser(
          data?.user.app_metadata.provider === 'google' ? data.user : null,
        );
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, []);

  if (!go_user) {
    return null;
  }

  const {
    // eslint-disable-next-line no-unused-vars
    role: go_authed,
    user_metadata: go_user_metadata,
    app_metadata: go_app_metadata,
  } = go_user;
  // eslint-disable-next-line no-unused-vars
  const { provider: go_provider } = go_app_metadata || {};
  const { full_name: go_full_name, avatar_url: go_user_avatar } =
    go_user_metadata || {};

  console.log(go_user);

  return (
    <div>
      {go_user ? (
        <div className="flex flex-col items-center justify-center">
          <img
            src={go_user_avatar}
            alt={`${go_full_name}'s Avatar`}
            className="mb-2 w-32 rounded-full"
          />
          <div className="flex flex-col items-center justify-center gap-1 capitalize text-[rgb(62,207,142)]">
            <span>Hey {go_full_name} !</span>
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
