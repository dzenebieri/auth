import SignInForm from './SignInForm';
import SignUpBN from './SignUpBN';
import ErrorIN from './ErrorIN';
import Dze from './Dze';
import X from '../../imgs/X.png';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSignUp } from '../hooks/useSignUp';

export default function SignUp() {
  const [signUpShow, setSignUpShow] = useState(false);
  const { register, getValues, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit({ username, email, password }) {
    signUp(
      { username, email, password },
      {
        onSettled: () => reset(),
      },
    );
  }

  const handleClick = () => {
    setSignUpShow(!signUpShow);
    reset();
  };

  const { signUp } = useSignUp(handleClick);

  return (
    <div className="flex h-screen items-center justify-center">
      <Dze />
      <div className="fixed left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
        <SignInForm />
        <SignUpBN type="primary" onClick={handleClick}>
          Sign Up
        </SignUpBN>
      </div>
      {signUpShow && (
        <div className="fixed left-2/4 top-2/4 max-w-full -translate-x-2/4 -translate-y-2/4 transition-all">
          <div className="cc h-[480px] w-[320px] max-w-full rounded-lg bg-neutral-900 sm:h-[551px] sm:w-[432px]">
            <header className="mb-4 h-[82px] w-[320px] border-b border-neutral-800 pb-[10px] sm:w-[432px] ">
              <button className="absolute right-4 top-4 w-6">
                <img src={X} alt="Elon -.- who" onClick={handleClick} />
              </button>
              <div className="absolute left-4 top-1 text-[32px] text-neutral-400">
                Sign Up
                <br />
                <div className="text-[15px] text-[rgb(96,103,112)]">
                  It&apos;s quick and easy.
                </div>
              </div>
            </header>
            <form
              type="submit"
              name="signUpForm"
              id="signUpForm"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center gap-3 p-4"
            >
              <ErrorIN error={errors?.username?.message}>
                <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Full name"
                  {...register('username', {
                    required: 'Name is required',
                  })}
                  className="h-[52px] w-[300px] rounded-md border border-neutral-800 px-4 py-3.5 text-sm font-semibold capitalize placeholder:text-sm placeholder:text-neutral-700 sm:w-[364px]"
                />
              </ErrorIN>
              <ErrorIN error={errors?.email?.message}>
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email"
                  {...register('email', {
                    required: 'Wrong email address',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                    },
                  })}
                  className="h-[52px] w-[300px] rounded-md border border-neutral-800 px-4 py-3.5 text-sm placeholder:text-sm placeholder:text-neutral-700 sm:w-[364px]"
                />
              </ErrorIN>
              <ErrorIN error={errors?.password?.message}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  {...register('password', {
                    required: 'Minimum 8 characters',
                    minLength: {
                      value: 8,
                    },
                  })}
                  className="h-[52px] w-[300px] rounded-md border border-neutral-800 px-4 py-3.5 text-sm font-bold placeholder:text-sm placeholder:font-normal placeholder:text-neutral-700 sm:w-[364px]"
                />
              </ErrorIN>
              <ErrorIN error={errors?.confirmPassword?.message}>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  {...register('confirmPassword', {
                    required: "Passwords don't match",
                    validate: (value) => value === getValues().password,
                  })}
                  className="h-[52px] w-[300px] rounded-md border border-neutral-800 px-4 py-3.5 text-sm font-bold placeholder:text-sm placeholder:font-normal placeholder:text-neutral-700 sm:w-[364px]"
                />
              </ErrorIN>
              <SignUpBN type="secondary">Sign Up</SignUpBN>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
