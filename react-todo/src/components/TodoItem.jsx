import React from 'react';

function TodoItem({ todo, onToggleComplete, onDelete }) {
  return (
    <li
      onClick={() => onToggleComplete(todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >
      {todo.text}
      <button onClick={(e) => {
        e.stopPropagation(); // Prevent the click event from triggering toggle
        onDelete(todo.id);
      }}>Delete</button>
    </li>
  );
}

export default TodoItem;
