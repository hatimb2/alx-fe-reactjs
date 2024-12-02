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
    const todo = screen.getByText('Learn React');
    
    // Check if the todo is present
    expect(todo).toBeInTheDocument();
    
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    
    // After deletion, the todo should no longer be in the document
    expect(todo).not.toBeInTheDocument();
  });
});
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders the TodoList component', () => {
  render(<TodoList />);

  // Check if the Todo List header is rendered
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();

  // Check if the initial todos are rendered
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Learn Jest/i)).toBeInTheDocument();
  expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
});

test('adds a new todo item', () => {
  render(<TodoList />);

  // Type a new todo and submit
  fireEvent.change(screen.getByPlaceholderText(/Add a new todo/i), { target: { value: 'Test new Todo' } });
  fireEvent.click(screen.getByText(/Add Todo/i));

  // Check if the new todo is rendered
  expect(screen.getByText(/Test new Todo/i)).toBeInTheDocument();
});

test('marks a todo as completed', () => {
  render(<TodoList />);

  // Click to mark "Learn React" as completed
  fireEvent.click(screen.getByText(/Learn React/i));

  // Verify the text is struck through
  expect(screen.getByText(/Learn React/i).style.textDecoration).toBe('line-through');
});

test('deletes a todo item', () => {
  render(<TodoList />);

  // Delete "Learn Jest"
  fireEvent.click(screen.getAllByText(/Delete/i)[0]);

  // Verify the deleted todo is no longer in the document
  expect(screen.queryByText(/Learn Jest/i)).not.toBeInTheDocument();
});
