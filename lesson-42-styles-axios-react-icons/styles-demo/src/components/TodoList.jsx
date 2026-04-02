import { useEffect, useState } from 'react';
import { getTodosFromServer } from '../api/todosAdapter.js';
import styles from './TodoList.module.css'
import Todo from './Todo.jsx';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getTodos() {
    setLoading(true);
    setError('');

    try {
      const data = await getTodosFromServer();
      setTodos(data);
    } catch (error) {
      setError(`Error: ${error.code} ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  const handleDo = (id) => {
    setTodos(todos.map(  todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo;
    }))
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(   todo => todo.id !== id       ))
  }

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div className={styles.container}>
      {loading && <div>Loading...</div>}
      {error && <div className={styles.error}>{error}</div>}
      {!loading && !error && !todos.length && <div>No Todos found </div>}
    { !!todos.length  && todos.map((todo) => (

      <Todo key={todo.id} todo={todo} onDo={handleDo} onDelete={handleDelete} />

      ))
    }
    </div>

  )
}