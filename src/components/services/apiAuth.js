import supabase from './supabase';

export async function signUpFun({ username, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
      emailRedirectTo: 'https://dzenebieri.github.io/auth/welcome',
    },
  });

  if (error) throw new Error(error.message);

  // console.log(data, error);
  return data;
}

export async function signInFun({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  // console.log(data, error);
  return data;
}
