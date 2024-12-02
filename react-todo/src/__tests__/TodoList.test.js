import '@testing-library/jest-dom';  // Correct import
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList component', () => {
    render(<TodoList />);
    // Check if the initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('allows a user to add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    // Add a new todo
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('allows a user to toggle a todo completion', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    
    // Initial state should be not completed
    expect(todo).not.toHaveStyle('text-decoration: line-through');

    // Click the todo to toggle completion
    fireEvent.click(todo);

    // Now it should be completed (strikethrough)
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('allows a user to delete a todo', () => {
    render(<TodoList />);
    const todoToDelete = screen.getByText('Learn React');
    
    // Check if the todo is present
    expect(todoToDelete).toBeInTheDocument();
    
    // Get all the delete buttons and click the first one
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);
    
    // After deletion, the todo should no longer be in the document
    expect(todoToDelete).not.toBeInTheDocument();
  });
});
