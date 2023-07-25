import { store } from "@/app/store";
import { TodosList } from "./TodoList";

export const TodoListWrapper = () => {
  const todos = store.getState().todos.items;

  return <TodosList todos={todos} />;
};
