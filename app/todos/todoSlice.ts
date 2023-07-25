import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "./schemas";

type TodoState = {
  items: Todo[];
  isLoading: boolean;
};

const initialState: TodoState = {
  items: [],
  isLoading: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    loadTodosStart: (state) => {
      state.isLoading = true;
    },
    loadTodosSuccess: (state, action: PayloadAction<Todo[]>) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.items.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  loadTodosStart,
  loadTodosSuccess,
} = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export { todoReducer };
