import supabase from './supabase';
import { useNavigate } from 'react-router-dom';

async function signOutFun() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error.message);
  }
}

export default function SignOutBN() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOutFun();
    navigate('/auth');
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-1 capitalize text-[rgb(62,207,142)] transition-all delay-75 duration-200 ease-in-out hover:opacity-80"
    >
      <span>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="rgb(62,207,142)"
            d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
          ></path>
        </svg>
      </span>
      <span>Sign out</span>
    </button>
  );
}
