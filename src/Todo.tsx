import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";
import TodoTable from "./components/TodoTable";
import AddTodoForm from "./components/AddTodoForm";
import { addTodo, deleteTodo, toggleComplete } from "./store/todoSlice";
import { todo_app_title } from "./utils/constant";

const Todo: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch: AppDispatch = useDispatch();

  const handleAddTodo = useCallback((text: string) => {
    dispatch(addTodo(text));
  }, []);

  const handleDeleteTodo = useCallback((id: number) => {
    dispatch(deleteTodo(id));
  }, []);

  const handleToggleComplete = useCallback((id: number) => {
    dispatch(toggleComplete(id));
  }, []);

  return (
    <>
      <h1>{todo_app_title}</h1>
      <AddTodoForm onAdd={handleAddTodo} todos={todos} />
      <TodoTable
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggleComplete={handleToggleComplete}
      />
    </>
  );
};

export default Todo;
