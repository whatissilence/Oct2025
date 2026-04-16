import './App.css'
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Action types
const ActionType = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

// Action creators
const increment = () => ({ type: ActionType.INCREMENT });
const decrement = () => ({ type: ActionType.DECREMENT });

// Reducers
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return state + 1;
    case ActionType.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

// Store
const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
})

function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleClickPlus = () => {
    dispatch(increment());
  }

  const handleClickMinus = () => {
    dispatch(decrement());
  }

  return (
    <div>
      Counter: {count}
      <div>
        <button onClick={handleClickPlus}>PLUS</button>
        <button onClick={handleClickMinus}>MINUS</button>
      </div>
    </div>
  )
}

function App() {

  return (
    <Provider store={store}>
      App
      <Counter />
    </Provider>
  )
}

export default App
