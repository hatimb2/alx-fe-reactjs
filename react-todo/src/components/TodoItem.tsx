import React from 'react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="todo-item" data-testid="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        data-testid="todo-checkbox"
      />
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        data-testid="todo-text"
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        data-testid="delete-button"
      >
        Delete
      </button>
    </div>
  );
}