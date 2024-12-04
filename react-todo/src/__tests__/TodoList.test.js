// src/__tests__/TodoList.test.js
import React from 'react';  // <-- Import React here
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {

  test('renders TodoList component', () => {
    render(<TodoList />);
    
    // Check if the TodoList title is in the document
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('renders initial todos', () => {
    render(<TodoList />);
    
    // Check if the initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    
    // Input the new todo and click add button
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));
    
    // Check if the new todo appears in the list
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    
    const todo = screen.getByText('Learn React');
    
    // Click to toggle completion
    fireEvent.click(todo);
    
    // Check if the todo is completed (crossed out)
    expect(todo).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back
    fireEvent.click(todo);
    
    // Check if the todo is not completed (not crossed out)
    expect(todo).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    
    const deleteButton = screen.getAllByText('Delete')[0];
    
    // Click delete button
    fireEvent.click(deleteButton);
    
    // Check if the todo is removed from the list
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

});
