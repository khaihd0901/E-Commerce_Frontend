import { create } from "zustand";
import { toast } from "sonner";
import userService from "@/services/userService";

export const useUserStore = create((set, get) => ({
  accessToken: null,
  user: null,
  wishList: [],
  isLoading: false,
  isSuccess: false,
  isError: false,

  setAccessToken: (token) => {
    set({
      accessToken: token,
    });
  },
  clearState: () => {
    set({
      accessToken: null,
      user: null,
      wishList: [],
      isLoading: false,
      isSuccess: false,
      isError: false,
    });
  },
  userForgotPassword: async (data) => {
    try {
      set({
        isLoading: true,
        isError: false,
        isSuccess: false,
      });
      await userService.userForgotPassword(data);
      set({
        isSuccess: true,
      });
      toast.success("We have sent OTP to your email");
    } catch (err) {
      set({
        isLoading: false,
        isSuccess: false,
        isError: true,
      });
      console.log(err);
    } finally {
      set({
        isLoading: false,
      });
    }
  },
  userVerifyOTP: async (OTP, email) => {
    try {
      set({
        isLoading: true,
        isSuccess: false,
        isError: false,
      });
      await userService.userVerifyOTP(OTP, email);
      set({ isSuccess: true });
    } catch (err) {
      set({ isError: true, isSuccess: false });
      console.log(err);
    } finally {
      set({ isLoading: false });
    }
  },
  userResetPassword: async (OTP, password, email) => {
    try {
      set({
        isLoading: true,
        isSuccess: false,
        isError: false,
      });
      await userService.userResetPassword(OTP, password, email);
      set({ isSuccess: true });
    } catch (err) {
      set({ isError: true, isSuccess: false });
      console.log(err);
    } finally {
      set({ isLoading: false });
    }
  },
  userUpdate: async (id, data) => {
    try {
      set({ isLoading: true });
      await userService.userUpdate(id, data);
      set({ isSuccess: true });
    } catch (err) {
      console.log(err);
      set({
        isError: true,
        isSuccess: false,
      });
    } finally {
      set({ isLoading: false });
    }
  },
  userAddProductToWishList: async (prodId) => {
    try {
      set({ isLoading: true });
      await userService.userAddProductToWishList(prodId);
      set({
        isSuccess: true,
      });
      toast.success("Product added to your wish list");
    } catch (err) {
      console.log(err);
      set({ isError: true });
    } finally {
      set({ isLoading: false });
    }
  },
  userGetAllWishList: async () => {
    try {
      set({ isLoading: true });
      const wishList = await userService.userGetAllWishList();
      if (wishList) {
        set({
          wishList: wishList,
          isSuccess: true,
        });
      }
    } catch (err) {
      console.log(err);
      set({ isError: true });
    } finally {
      set({ isLoading: false });
    }
  },
  userRemoveProductFromWishList: async (prodId) =>{
     try {
      set({ isLoading: true });
      await userService.userRemoveProductFromWishList(prodId);
      set({
        isSuccess: true,
      });
      toast.success("Product removed");
    } catch (err) {
      console.log(err);
      set({ isError: true });
    } finally {
      set({ isLoading: false });
    }
  }
}));
