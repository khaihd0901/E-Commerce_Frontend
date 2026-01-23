import { create } from "zustand";
import { toast } from "sonner";
import userService from "@/services/userService";

export const useUserStore = create((get, set) => ({
  user: null,
  accessToken: null,
  isLoading: false,
  isSuccess: false,
  isError: false,

  clearState: () => {
    set({
      accessToken: null,
      user: null,
      isLoading: false,
      isSuccess: false,
      isError: false,
    });
  },
  userForgotPassword: async (email) => {
    try {
      set({
        isLoading: true,
        isError: false,
      });
      await userService.userForgotPassword(email);
      toast.success("Email Sent");
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
}));
