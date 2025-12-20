import { useState } from 'react';
import { TodoProvider, useTodo } from './context/TodoContext';
import './App.css';

function TodoList() {
  const { todos, deleteTodo, toggleTodo } = useTodo();

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        Nenhuma tarefa adicionada.
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <input 
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)} className="btn-delete">
            Excluir
          </button>
        </li>
      ))}
    </ul>
  );
}

function TodoInput() {
  const [text, setText] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Digite uma nova tarefa..." 
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

function TodoStats() {
  const { todos } = useTodo();
  const completed = todos.filter(t => t.completed).length;
  const total = todos.length;

  if (total === 0) return null;

  return (
    <div className="todo-stats">
      <div className="stat-item">
        <div className="stat-number" style={{ color: '#0078d4' }}>{total}</div>
        <div className="stat-label">Total</div>
      </div>
      <div className="stat-item">
        <div className="stat-number" style={{ color: '#4caf50' }}>{completed}</div>
        <div className="stat-label">Concluídas</div>
      </div>
      <div className="stat-item">
        <div className="stat-number" style={{ color: '#ff9800' }}>{total - completed}</div>
        <div className="stat-label">Pendentes</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1>📝 To-Do List</h1>
        <TodoInput />
        <TodoList />
        <TodoStats />
      </div>
    </TodoProvider>
  );
}