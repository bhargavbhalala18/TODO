import React from "react";

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
          <th>ID</th>
          <th>Task</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.text}</td>
            <td>{todo.completed ? "Completed" : "Pending"}</td>
            <td>
              <button
                onClick={() => onToggleComplete(todo.id)}
                disabled={todo.completed}
                style={{ marginRight: "10px" }}
              >
                Complete
              </button>
              <button onClick={() => onDelete(todo.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
