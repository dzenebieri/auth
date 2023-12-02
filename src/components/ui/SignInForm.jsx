import FacebookBN from '../withOAuth/FacebookBN';
import GoogleBN from '../withOAuth/GoogleBN';
import GitHubBN from '../withOAuth/GitHubBN';
import { useSignIn } from '../hooks/useSignIn';
import { useState } from 'react';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);

  const { signIn, isLoading } = useSignIn();

  const togglePassVis = () => {
    setPasswordShow(!passwordShow);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    signIn(
      { email, password },
      {
        onSettled: (data, error) => {
          if (error) {
            console.error(error);
          } else {
            setEmail('');
            setPassword('');
          }
        },
      },
    );
  }

  return (
    <form
      type="submit"
      name="form"
      id="form"
      onSubmit={handleSubmit}
      className="flex h-[456px] w-[320px] max-w-full flex-col items-center gap-3 rounded-lg bg-neutral-900 p-4 sm:w-[396px]"
    >
      <input
        id="email"
        type="text"
        name="email"
        placeholder="Email"
        disabled={isLoading}
        onChange={(e) => setEmail(e.target.value)}
        className="h-[52px] w-[300px] rounded-md border border-neutral-800 px-4 py-3.5 text-sm placeholder:text-sm placeholder:text-neutral-700 sm:w-[364px]"
      />
      <input
        type={passwordShow ? 'text' : 'password'}
        name="password"
        id="password"
        placeholder="Password"
        disabled={isLoading}
        onChange={(e) => setPassword(e.target.value)}
        className="h-[52px] w-[300px] rounded-md border border-neutral-800 py-3.5 pl-4 pr-11 text-sm font-bold placeholder:text-sm placeholder:font-normal placeholder:text-neutral-700 sm:w-[364px]"
      />
      {password.length > 0 && (
        <button
          type="button"
          onClick={togglePassVis}
          className="absolute right-8 top-[93px] cursor-pointer"
        >
          {passwordShow ? (
            <span className="material-symbols-outlined text-lg">
              visibility
            </span>
          ) : (
            <span className="material-symbols-outlined text-lg">
              visibility_off
            </span>
          )}
        </button>
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="flex h-[52px] w-[300px] items-center justify-center rounded-md border-[calc(.06887vw+.67769px)] border-solid border-[#262626] bg-neutral-800 text-base font-semibold text-[rgb(62,207,142)] transition-all hover:border-[rgb(62,207,142)] hover:bg-[rgb(55,153,107)] hover:text-neutral-800 sm:w-[364px]"
      >
        Sign in
      </button>
      <FacebookBN />
      <GoogleBN />
      <GitHubBN />
    </form>
  );
}
