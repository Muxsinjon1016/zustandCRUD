import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAddTodo = create(
  persist(
    (set) => ({
      data: [],
      addTodo: (newData) =>
        set((state) => ({ data: [...state.data, newData] })),
      deleteTodo: (title) =>
        set((state) => ({
          data: state.data.filter((item) => item.title !== title),
        })),
      editTodo: (title, description, newTitle, newDescription) =>
        set((state) => ({
          data: state.data.map((item) =>
            item.title === title && item.description === description
              ? { ...item, title: newTitle, description: newDescription }
              : item
          ),
        })),
    }),
    { name: "todo" }
  )
);
