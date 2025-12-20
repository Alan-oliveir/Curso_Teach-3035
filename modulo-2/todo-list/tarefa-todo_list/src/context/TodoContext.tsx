import { createContext, useContext, useState, ReactNode } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Função para salvar no estado e no localStorage
  const saveTodos = (newTodos: Todo[]) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    saveTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    saveTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    saveTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodo deve ser usado dentro de um TodoProvider');
  return context;
}