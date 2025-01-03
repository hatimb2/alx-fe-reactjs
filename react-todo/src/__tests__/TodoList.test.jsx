import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  test('renders Todo List title', () => {
    render(<TodoList />);
    const titleElement = screen.getByText(/todo list/i);
    expect(titleElement).toBeInTheDocument(); 
  });

  test('renders initial todos', () => {
    render(<TodoList />);
    const todoElements = screen.getAllByRole('listitem');
    expect(todoElements).toHaveLength(2);
    expect(todoElements[0]).toHaveTextContent('Learn React');
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText(/add a new todo/i);
    const buttonElement = screen.getByText(/add todo/i);
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.click(buttonElement);
    const todoElements = screen.getAllByRole('listitem');
    expect(todoElements).toHaveLength(3);
  });

  test('can toggle a todo', () => {
    render(<TodoList />);

    
    const todoElement = screen.getByText('Learn React');
    
    
    const listItem = todoElement.closest('li');

    
    fireEvent.click(todoElement);

    
    expect(listItem).toHaveClass('completed');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    const todoElement = screen.getByText('Learn React');
    const deleteButton = screen.getAllByText('Delete')[0]; 
    fireEvent.click(deleteButton);
    expect(todoElement).not.toBeInTheDocument();
  });
});
