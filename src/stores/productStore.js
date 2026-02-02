import { create } from "zustand";
import productService from "@/services/productService";

export const useProductStore = create((set, get) => ({
  products: [],
  product: null,
  isLoading: false,
  isSuccess: false,
  isError: false,

  setProducts: (data) => {
    set({
      products: data,
    });
  },
  setProduct: (data) => {
    set({
      product: data,
    });
  },
  clearState: () => {
    set({
      searchResults: [],
      products: [],
      product: null,
      isLoading: false,
      isSuccess: false,
      isError: false,
    });
  },
  productGetAll: async () => {
    try {
      set({ isLoading: true });
      const res = await productService.productGetAll();
      set({ products: res });
    } catch (err) {
      console.log(err);
      set({ isError: true });
    } finally {
      set({
        isLoading: false,
      });
    }
  },
productSearch: async (queryString = "") => {
  set({ isLoading: true });

  const res = await productService.productSearch(queryString);

  set({
    searchResults: res,
    isLoading: false,
  });

  return res;
},

  productGetById: async (id) => {
    try {
      set({ isLoading: true });
      const data = await productService.productGetById(id);
      console.log("data", data);
      if (data) {
        get().setProduct(data);
      }
    } catch (err) {
      console.log(err);
      set({ isError: true });
    } finally {
      set({
        isLoading: false,
      });
    }
  },
}));
