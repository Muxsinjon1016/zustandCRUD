import { create } from "zustand";

export const useAddTodo = create((set) => {
  return {
    data: [],
    addTodo: (newData) =>
      set((state) => ({ ...state, data: [...state.data, newData] })),
  };
});
