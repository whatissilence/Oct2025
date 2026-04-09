import TodoList from './components/TodoList.jsx';
import TodoContextProv from './components/TodoContextProv.jsx';
import AddTodoForm from './components/AddTodoForm.jsx';

function App() {

  return (
    <TodoContextProv>
      <AddTodoForm />
      <TodoList />
    </TodoContextProv>
  )
}

export default App
