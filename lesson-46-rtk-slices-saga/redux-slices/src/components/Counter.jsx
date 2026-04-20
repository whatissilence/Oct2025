import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { increment, decrement, setCount } from '../redux/counterSlice.js';
import { counterSelector } from '../redux/selectors.js';

export default function Counter() {
  const [inputCounter, setInputCounter] = useState(0);

  const count = useSelector(counterSelector);
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
    <div className={`counter`}>
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