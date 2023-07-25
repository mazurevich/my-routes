"use client";

import { FC } from "react";
import { Todo } from "../schemas";

type TodoListProps = {
  todos: Todo[];
};

export const TodosList: FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
