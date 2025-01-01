import React, { useState } from "react";
import TodoTable, { TodoItem } from "./components/TodoTable";
import AddTodoForm from "./components/AddTodoForm";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo: TodoItem = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: true } : todo))
    );
  };

  return (
    <>
      <h1>TODO App</h1>
      <AddTodoForm onAdd={handleAddTodo} />
      <TodoTable
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggleComplete={handleToggleComplete}
      />
    </>
  );
};

export default App;
