import api from "../lib/axios";

const userForgotPassword = async (email) => {
  const res = await api.post(`user/forgot-password`, email);
  return res.data
};
const userResetPassword = async (token) => {
  const res = await api.post(`user/reset-password/${token}`);
  return res.data;
};

const userService = {
  userForgotPassword,
  userResetPassword,
};

export default userService;
