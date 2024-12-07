import { describe, it, expect } from 'vitest';
import { render, screen ,fireEvent} from '@testing-library/react' 
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';
import React from 'react';

describe('TodoList', () => {
  it('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('toggles todo completion', () => {
    render(<TodoList />);
    const checkbox = screen.getAllByTestId('todo-checkbox')[0];
    const todoText = screen.getAllByTestId('todo-text')[0];

    fireEvent.click(checkbox);
    expect(todoText).toHaveStyle({ textDecoration: 'line-through' });

    fireEvent.click(checkbox);
    expect(todoText).toHaveStyle({ textDecoration: 'none' });
  });

  it('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByTestId('delete-button')[0];
    const firstTodo = screen.getByText('Learn React');

    fireEvent.click(deleteButton);
    expect(firstTodo).not.toBeInTheDocument();
  });
});
