import React, { useRef } from "react";
import { add_title, input_task_placeholder } from "../utils/constant";

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

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
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} placeholder={input_task_placeholder} />
      <button type="submit">{add_title}</button>
    </form>
  );
};

export default AddTodoForm;
