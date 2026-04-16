import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, setCount } from '../redux/actions.js';
import { selectCounter, selectTheme } from '../redux/selectors.js';
import { useState } from 'react';

export default function Counter() {
  const [inputCounter, setInputCounter] = useState(0);

  const count = useSelector(selectCounter);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleClickPlus = () => {
    dispatch(increment());
  }

  const handleClickMinus = () => {
    dispatch(decrement());
  }

  const handleChangeInput = (event) => {
    setInputCounter(event.target.value)
  }

  const handleClickSetCount = () => {
    const newCount = Number(inputCounter);

    if (!isNaN(newCount)) {
      dispatch(setCount(newCount))
    }
  }

  return (
    <div className={`counter ${theme}`}>
      Counter: {count}
      <div>
        <button onClick={handleClickPlus}>PLUS</button>
        <button onClick={handleClickMinus}>MINUS</button>
      </div>
      <div>
        <input type="number" value={inputCounter} onChange={handleChangeInput} />
        <button onClick={handleClickSetCount} >Set count</button>
      </div>
    </div>
  )
}