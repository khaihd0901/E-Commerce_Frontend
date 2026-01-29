import api from "../lib/axios";

const userForgotPassword = async (email) => {
  const res = await api.post(`user/forgot-password`, email);
  return res.data
};

const userVerifyOTP = async (OTP,email) => {
  const res = await api.post(`user/verify-otp/`, {OTP,email});
  return res.data;
};
const userResetPassword = async (OTP,password,email) => {
  const res = await api.post(`user/reset-password/`, {OTP,password,email});
  return res.data;
};
const userUpdate = async (id,data) =>{
  const res = await api.put(`user/update/${id}`, data)
  return res.data
}
const userAddProductToWishList = async(prodId)=>{
  console.log(prodId)
  const res = await api.post(`user/add-wishlist`,{prodId})
  return res.data
}
const userGetAllWishList = async() =>{
  const res = await api.get(`user/wishlist`)
  return res.data.wishList
}
const userRemoveProductFromWishList = async (prodId) =>{
  const res = await api.put(`user/remove-wishlist`, {prodId})
  return res.data
}
const userService = {
  userForgotPassword,
  userVerifyOTP,
  userResetPassword,
  userUpdate,
  userAddProductToWishList,
  userGetAllWishList,
  userRemoveProductFromWishList
};

export default userService;
