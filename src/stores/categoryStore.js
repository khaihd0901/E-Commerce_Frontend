import { create } from "zustand";
import categoryService from "../services/categoryService";

export const useCategoryStore = create((set, get) => ({
  categories: [],
  category: null,
  isLoading: false,
  isSuccess: false,
  isError: false,

  setCategories: (data) => {
    set({
      categories: data,
    });
  },

  setCategory: (data) => {
    set({
      category: data,
    });
  },

  clearState: () => {
    set({
      categories: [],
      category: null,
      isLoading: false,
      isSuccess: false,
      isError: false,
    });
  },

  categoryGetAll: async () => {
    try {
      set({ isLoading: true });
      const data = await categoryService.getCategories();
      if (data) {
        get().setCategories(data);
      }
    } catch (err) {
      console.log(err);
      set({ isError: true });
    } finally {
      set({ isLoading: false });
    }
  },

  categoryGetById: async (id) => {
    try {
      set({ isLoading: true });
      const data = await categoryService.getCategoryById(id);
      if (data) {
        get().setCategory(data);
      }
    } catch (err) {
      console.log(err);
      set({ isError: true });
    } finally {
      set({ isLoading: false });
    }
  },
}));
