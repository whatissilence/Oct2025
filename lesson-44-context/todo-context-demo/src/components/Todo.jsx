import styles from './Todo.module.css'
import { MdDelete } from "react-icons/md";
import { useContext } from 'react';
import TodoContext from '../contexts/TodoContext.jsx';

export default function Todo({ todo }) {
  const { deleteItem, toggleItem } = useContext(TodoContext);

  const handleToggleClick = () => {
    toggleItem(todo.id);
  }

  const handleDeleteClick = () => {
    deleteItem(todo.id)
  }

  return (
    <div className={styles['todo-item']}>

      <span className={todo.completed ? styles.completed : ''}>{todo.id} -- {todo.title}</span>
      <span className={styles.buttons}>
        <button onClick={handleToggleClick}>{todo.completed ? 'Undo' : 'Do'}</button>
        <MdDelete className={styles.delete} onClick={handleDeleteClick} />
      </span>
    </div>
  )
}