import { SearchInput } from "@/components";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useState, Suspense } from "react";
import { z } from "zod";

const todoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});

type Todo = z.infer<typeof todoSchema>;

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return todoSchema.array().parse(data);
}

async function TodosList() {
  const todos = await getTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default function TodosPage() {
  return (
    <>
      <h1 className="mb-5 bold text-3xl">Todos List</h1>
      <SearchInput />
      <ThemeSwitcher />
      <Suspense fallback={<div>Loading...</div>}>
        <TodosList />
      </Suspense>
    </>
  );
}
