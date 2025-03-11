import { create } from "zustand";

interface QueryStore {
  query: string;
  categories: string[];
  setQuery: (query: string) => void;
  addCategories: (categories: string[]) => void;
}

const useQueryStore = create<QueryStore>((set) => ({
  query: "",
  categories: [],
  setQuery: (query) => set({ query }),
  addCategories: (categories) => set({ categories }),
}));

export default useQueryStore;
