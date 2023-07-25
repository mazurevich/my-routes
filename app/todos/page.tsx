import { SearchInput } from "@/app/components";
import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";
import { store } from "@/app/store";
import { loadTodosSuccess } from "./todoSlice";
import { todoSchema } from "./schemas";
import { TodoListWrapper } from "./components/TodoListWrapper";

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return todoSchema.array().parse(data);
}

export default async function TodosPage() {
  const todos = await getTodos();
  store.dispatch(loadTodosSuccess(todos));

  return (
    <>
      <h1 className="mb-5 bold text-3xl">Todos List</h1>
      <SearchInput />
      <ThemeSwitcher />
      <TodoListWrapper />
    </>
  );
}
