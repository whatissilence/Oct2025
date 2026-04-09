import { useContext } from 'react';
import styles from './TodoList.module.css'
import Todo from './Todo.jsx';
import TodoContext from '../contexts/TodoContext.jsx';

export default function TodoList() {
  const { items, loading, error } = useContext(TodoContext);

  return (
    <>
      <div className={styles.container}>
        {loading && <div>Loading...</div>}
        {error && <div className={styles.error}>{error}</div>}
        {!loading && !error && !items.length && <div>No Todos found </div>}
        { !!items.length  && items.map((todo) => (

          <Todo key={todo.id} todo={todo} />

        ))
        }
      </div>
    </>
  )
}