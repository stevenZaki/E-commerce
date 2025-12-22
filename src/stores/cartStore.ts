import { CartStoreActionsType, CartStoreStateType } from "@/types";
import { create } from "zustand";

const useStore = create<CartStoreStateType & CartStoreActionsType>()((set) => ({
  cart: [],
  addToCart:()
}));

export default useCartStore;
