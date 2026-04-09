import { useContext, useState } from 'react';
import TodoContext from '../contexts/TodoContext.jsx';


export default function AddTodoForm() {
  const [addTodoValue, setAddTodoValue] = useState('');
  const { addTodo } = useContext(TodoContext)

  const handleAddTodo = () => {
    addTodo(addTodoValue);
    setAddTodoValue('');
  }

  return (
    <div>
      <label>Add new Todo:
        <input value={addTodoValue} onChange={e => setAddTodoValue(e.target.value)} />
      </label>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}