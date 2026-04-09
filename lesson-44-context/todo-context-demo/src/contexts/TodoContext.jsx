import { createContext } from 'react';


const TodoContext = createContext({
  items: [],
  setItems: () => {},
  deleteItem: () => {},
  toggleItem: () => {},
  loading: false,
  error: '',
})

export default TodoContext;