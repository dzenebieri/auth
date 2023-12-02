import supabase from '../services/supabase';

export async function signInWithFacebook() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook',
    options: {
      redirectTo: 'https://dzenebieri.github.io/auth/welcome',
    },
  });
  if (error) throw new Error(error.message);

  // console.log(data);
  return data;
}

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://dzenebieri.github.io/auth/welcome',
    },
  });
  if (error) throw new Error(error.message);

  // console.log(data);
  return data;
}

export async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'https://dzenebieri.github.io/auth/welcome',
    },
  });
  if (error) throw new Error(error.message);

  // console.log(data);
  return data;
}
