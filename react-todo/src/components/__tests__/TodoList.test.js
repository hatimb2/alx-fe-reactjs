import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';  

describe('TodoList', () => {
  test('renders the TodoList component with initial todos', () => {
    render(<TodoList />);
    // Ensure the initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('allows the user to add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(screen.getByRole('button', { name: /add/i }));

    // Verify that the new todo is added to the list
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('allows the user to toggle a todo item', () => {
    render(<TodoList />);

    const todoText = screen.getByText('Learn React');
    // Initially, the todo should not have the "completed" class
    expect(todoText).not.toHaveClass('completed');

    // Simulate clicking the todo text to toggle completion status
    fireEvent.click(todoText);

    // Now the todo should have the "completed" class
    expect(todoText).toHaveClass('completed');

    // Optionally toggle again to ensure the class is removed
    fireEvent.click(todoText);
    expect(todoText).not.toHaveClass('completed');
  });

  test('allows the user to delete a todo item', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText('Delete');
    const firstDeleteButton = deleteButtons[0]; // Select the first delete button
    fireEvent.click(firstDeleteButton);

    // Verify that the todo item is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});