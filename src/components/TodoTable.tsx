import React from "react";
import {
  complete_title,
  delete_title,
  status_completed,
  status_pending,
  table_id,
  table_status,
  table_task,
} from "../utils/constant";

export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoTableProps {
  todos: TodoItem[];
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TodoTable: React.FC<TodoTableProps> = ({
  todos,
  onDelete,
  onToggleComplete,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>{table_id}</th>
          <th>{table_task}</th>
          <th>{table_status}</th>
          <th>{table_task}</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.text}</td>
            <td>{todo.completed ? status_completed : status_pending}</td>
            <td>
              <button
                onClick={() => onToggleComplete(todo.id)}
                disabled={todo.completed}
                style={{ marginRight: "10px" }}
              >
                {complete_title}
              </button>
              <button onClick={() => onDelete(todo.id)}>{delete_title}</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
