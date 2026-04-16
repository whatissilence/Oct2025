import './App.css'
import { Provider, useDispatch, useSelector } from 'react-redux';
import Counter from './components/Counter.jsx';
import { selectTheme } from './redux/selectors.js';
import { toggleTheme } from './redux/actions.js';

function App() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div className={`app ${theme}`}>
      App: {theme}
      <div>
        <button onClick={handleChangeTheme}>Change Theme</button>
      </div>
      <Counter />
    </div>
  )
}

export default App
