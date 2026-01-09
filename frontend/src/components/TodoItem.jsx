import React from "react";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  return (
    <div
      className={`flex justify-between items-center p-4 rounded shadow ${
        todo.IsCompleted ? "bg-green-100" : "bg-red-100"
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.IsCompleted}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5"
        />
        <span
          className={`font-medium text-lg ${
            todo.IsCompleted ? "text-gray-600" : "text-gray-800"
          }`}
        >
          {todo.Title}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onEdit(todo.id)}
          className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
