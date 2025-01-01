import React, { useEffect, useRef } from "react";
import {
  add_title,
  completed_task_count_title,
  input_task_placeholder,
} from "../utils/constant";

interface AddTodoFormProps {
  onAdd: (text: string) => void;
  completedCount: number;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd, completedCount }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    return () => {
      inputRef.current?.blur();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      const text = inputRef.current.value.trim();
      if (text) {
        onAdd(text);
        inputRef.current.value = "";
      }
    }
  };

  return (
    <>
      <p>
        {completed_task_count_title}: {completedCount}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder={input_task_placeholder}
        />
        <button type="submit">{add_title}</button>
      </form>
    </>
  );
};

export default AddTodoForm;
