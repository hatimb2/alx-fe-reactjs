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
    expect(todoElements).toHaveLength(2); // Ensure there are two initial todos
    expect(todoElements[0]).toHaveTextContent('Learn React');
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText(/add a new todo/i);
    const buttonElement = screen.getByText(/add todo/i);
    
    // Simulate typing and adding a new todo
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.click(buttonElement);

    // Verify the new todo is added to the list
    const todoElements = screen.getAllByRole('listitem');
    expect(todoElements).toHaveLength(3); // One more todo should be added
    expect(todoElements[2]).toHaveTextContent('New Todo'); // Ensure the new todo is the last one
  });

  test('can toggle a todo', () => {
    render(<TodoList />);
    
    // Find the todo item and the corresponding list item
    const todoElement = screen.getByText('Learn React');
    const listItem = todoElement.closest('li');
    
    // Simulate clicking the todo item to toggle its completion state
    fireEvent.click(todoElement);
    
    // Verify the list item now has the 'completed' class
    expect(listItem).toHaveClass('completed');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    
    // Find the todo element and the delete button
    const todoElement = screen.getByText('Learn React');
    const deleteButton = screen.getAllByText('Delete')[0]; // Select the first delete button
    
    // Simulate clicking the delete button
    fireEvent.click(deleteButton);
    
    // Verify the todo element is removed from the document
    expect(todoElement).not.toBeInTheDocument();
  });
});
