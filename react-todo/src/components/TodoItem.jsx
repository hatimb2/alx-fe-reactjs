import React from "react";

export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
      <div className="flex items-center justify-between p-3 border-b" data-testid="todo-item">
        <div
          className={`flex items-center cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
          onClick={() => onToggle(todo.id)} // Toggle the todo completion status when clicked
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)} // Trigger toggle when the checkbox is clicked
            className="mr-2"
          />
          <span className={todo.completed ? 'completed' : ''}>{todo.text}</span> {/* Apply the completed class */}
        </div>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-700"
          aria-label="Delete todo"
        >
          Delete
        </button>
      </div>
    );
  }