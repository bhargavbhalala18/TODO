const ActionTypes = {
  ADD: "ADD",
  DELETE: "DELETE",
  TOGGLE_COMPLETE: "TOGGLE_COMPLETE",
} as const;

const todo_app_title = "TODO App";
const completed_task_count_title = "Completed Tasks";

const add_title = "Add";
const complete_title = "Complete";
const delete_title = "Delete";

const input_task_placeholder = "Add a new task";

const table_id = "ID";
const table_task = "Task";
const table_status = "Status";
const table_actions = "Actions";

const status_completed = "Completed";
const status_pending = "Pending";

export {
  todo_app_title,
  completed_task_count_title,
  ActionTypes,
  add_title,
  delete_title,
  complete_title,
  status_completed,
  status_pending,
  input_task_placeholder,
  table_id,
  table_actions,
  table_status,
  table_task,
};
