import supabase from '../services/supabase';
import { useEffect, useState } from 'react';

export default function FacebookUser() {
  const [fb_user, setFbUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        setFbUser(
          data?.user.app_metadata.provider === 'facebook' ? data.user : null,
        );
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, []);

  if (!fb_user) {
    return null;
  }

  const {
    // eslint-disable-next-line no-unused-vars
    role: fb_authed,
    user_metadata: fb_user_metadata,
    app_metadata: fb_app_metadata,
  } = fb_user;
  // eslint-disable-next-line no-unused-vars
  const { provider: fb_provider } = fb_app_metadata || {};
  const { nickname: fb_nickname } = fb_user_metadata || {};

  console.log(fb_user);

  return (
    <div>
      {fb_user ? (
        <div className="fb flex flex-col items-center justify-center gap-1 capitalize text-[rgb(62,207,142)]">
          <span>Hey {fb_nickname} !</span>
          <div>
            <p className="flex items-center gap-1">
              welcome world wide web
              <span className="material-symbols-outlined">public</span>
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
