import { create } from "zustand";

export const useStore = create((set) => ({
  storePosts: [],
  setPosts: () => set((posts) => ({ storePosts: posts })),
  isOpen: false,
  setShowSearch: () => set((state) => ({ isOpen: true })),
  setCloseSearch: () => set((state) => ({ isOpen: false })),
}));
