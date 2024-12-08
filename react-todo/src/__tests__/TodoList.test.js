import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {

  test('renders the TodoList component correctly', () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText('New Todo')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('New Todo');
    const addButton = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    const deleteButton = screen.getByText('Delete');
    
    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });

});
