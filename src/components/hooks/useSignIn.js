import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../contexts/AuthContext';
import { signInFun } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useSignIn() {
  const navigate = useNavigate();
  const { authedUser } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: signIn, isLoading } = useMutation({
    mutationFn: ({ email, password }) => signInFun({ email, password }),
    onSuccess: (data) => {
      authedUser(data.user);
      queryClient.setQueryData(['user'], data.user);
      navigate('/welcome', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Invalid email or password.');
    },
  });

  return { signIn, isLoading };
}
