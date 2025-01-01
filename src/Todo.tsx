import React, { useReducer, useCallback } from "react";
import TodoTable, { TodoItem } from "./components/TodoTable";
import AddTodoForm from "./components/AddTodoForm";
import { ActionTypes, todo_app_title } from "./utils/constant";

type TodoAction =
  | { type: typeof ActionTypes.ADD; text: string }
  | { type: typeof ActionTypes.DELETE; id: number }
  | { type: typeof ActionTypes.TOGGLE_COMPLETE; id: number };

const todoReducer = (state: TodoItem[], action: TodoAction): TodoItem[] => {
  switch (action.type) {
    case ActionTypes.ADD:
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case ActionTypes.DELETE:
      return state.filter((todo) => todo.id !== action.id);
    case ActionTypes.TOGGLE_COMPLETE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: true } : todo
      );
    default:
      return state;
  }
};

const Todo: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAddTodo = useCallback((text: string) => {
    dispatch({ type: ActionTypes.ADD, text });
  }, []);

  const handleDeleteTodo = useCallback((id: number) => {
    dispatch({ type: ActionTypes.DELETE, id });
  }, []);

  const handleToggleComplete = useCallback((id: number) => {
    dispatch({ type: ActionTypes.TOGGLE_COMPLETE, id });
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
