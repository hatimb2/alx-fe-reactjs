import React,{useState} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

export default function TodoList() {
    const [todos, setTodos] = useState([
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Write tests', completed: false },
    ]);
  
    const addTodo = (text) => {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    };
  
    const toggleTodo = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    return (
      <div className="max-w-md mx-auto mt-8 p-4">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <AddTodoForm onAdd={addTodo} />
        <div className="mt-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </div>
      </div>
    );
  }