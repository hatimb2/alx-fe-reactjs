import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  test('renders the TodoList component with initial todos', () => {
    render(<TodoList />);

    // Ensure that initial todo items are displayed
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('allows the user to add a new todo', () => {
    render(<TodoList />);

    // Simulate user typing and submitting a new todo
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'New Todo' },
    });
    fireEvent.click(screen.getByText('Add'));

    // Verify that the new todo is added to the list
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('allows the user to toggle a todo item', () => {
    render(<TodoList />);

    const todoText = screen.getByText('Learn React');

    // Toggle the completion status of the first todo
    fireEvent.click(todoText);
    expect(todoText).toHaveClass('completed'); // Check if the todo has the "completed" class

    // Toggle back the completion status
    fireEvent.click(todoText);
    expect(todoText).not.toHaveClass('completed');
  });

  test('allows the user to delete a todo item', () => {
    render(<TodoList />);

    const todoText = screen.getByText('Learn React');

    // Simulate clicking the delete button
    fireEvent.click(screen.getByText('Delete'));

    // Verify that the todo item is removed
    expect(todoText).not.toBeInTheDocument();
  });
});
