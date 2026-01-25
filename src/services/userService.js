import api from "../lib/axios";

const userForgotPassword = async (email) => {
  const res = await api.post(`user/forgot-password`, email);
  return res.data
};

const userVerifyOTP = async (OTP,email) => {
  console.log(OTP,email)
  const res = await api.post(`user/verify-otp/`, {OTP,email});
  return res.data;
};
const userResetPassword = async (OTP,password,email) => {
  const res = await api.post(`user/reset-password/`, {OTP,password,email});
  return res.data;
};

const userService = {
  userForgotPassword,
  userVerifyOTP,
  userResetPassword,
};

export default userService;
