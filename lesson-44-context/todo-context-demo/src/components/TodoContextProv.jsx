import TodoContext from '../contexts/TodoContext.jsx';
import { useEffect, useState } from 'react';
import { getTodosFromServer } from '../api/todosAdapter.js';


export default function TodoContextProv({ children }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function requestTodos() {
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

  const deleteTodo = (id) => {
    setTodos(todos.filter(   todo => todo.id !== id       ))
  }

  const toggleTodo = (id) => {
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

  const addTodo = (text) => {
    const todosCopy = [...todos];
    todosCopy.unshift({
      userId: 4,
      id: Date.now(),
      title: text,
      completed: false
    })

    setTodos(todosCopy);
  }


  useEffect(() => {
    requestTodos();
  }, [])

  return (
    <TodoContext.Provider value={{
      items: todos,
      setItems: setTodos,
      deleteItem: deleteTodo,
      toggleItem: toggleTodo,
      addTodo,
      loading,
      error
    }}>
      {children}
    </TodoContext.Provider>
  )
}