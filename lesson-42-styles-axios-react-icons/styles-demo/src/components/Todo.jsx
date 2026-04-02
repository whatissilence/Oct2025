import styles from './Todo.module.css'
import { MdDelete } from "react-icons/md";

export default function Todo({ todo, onDo, onDelete }) {

  // не використовується, бо написали коротку фугкцію
  const handleDoClick = () => {
    onDo(todo.id);
  }

  const handleDeleteClick = () => {
    onDelete(todo.id)
  }

  return (
    <div className={styles['todo-item']}>

      <span className={todo.completed ? styles.completed : ''}>{todo.id} -- {todo.title}</span>
      <span className={styles.buttons}>
        <button onClick={() => onDo(todo.id)}>{todo.completed ? 'Undo' : 'Do'}</button>
        {/*<button onClick={handleDeleteClick}>Delete</button>*/}
        <MdDelete className={styles.delete} onClick={handleDeleteClick} />
      </span>
    </div>
  )
}