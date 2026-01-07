import api from '../lib/axios';
import { toast } from 'sonner';

export const signIn = async (username, password) => {
  const res = await api.post('auth/signin', { username, password });
  toast.success('Welcome back!');
  return res.data;
};

export const getUser = async (token) =>{
  const res = await api.get('auth/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
}

export const signOut = async () => {
  await api.post('auth/signout');
  toast.success('Signed out successfully!');
}