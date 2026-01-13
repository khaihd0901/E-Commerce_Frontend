import api from '../lib/axios';
import { toast } from 'sonner';

export const logIn = async (username, password) => {
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

export const registerUser = async (username,email,password) =>{
  const res = await api.post('auth/signup',{username,email,password});
  if(res){
    toast.success('Register Success')
  }else{
    toast.error('Something When Wrong!')
  }
}

export const forgotPassword = async () =>{
  
}

export const signOut = async () => {
  await api.post('auth/signout');
  toast.success('Signed out successfully!');
}