import { useMutation } from '@tanstack/react-query';
import { useAuth } from '../contexts/AuthContext';
import { signUpFun } from '../services/apiAuth';
import { toast } from 'react-hot-toast';

export function useSignUp(onCallback) {
  const { authedUser } = useAuth();
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpFun,
    onSuccess: (data) => {
      authedUser(data.user);
      toast.success('Verify your email address.');
      toast.success('Account successfully created!');
    },
    onError: () => {
      toast.error('Too many requests. Try later.');
    },
    onSettled: () => {
      if (onCallback) {
        onCallback();
      }
    },
  });

  return { signUp, isLoading };
}
