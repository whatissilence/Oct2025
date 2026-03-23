import { useState } from 'react';
import './CustomButton.css';

console.log('File loaded')

export default function CustomButton({ comm, incr }) {
  console.log('CustomButton function triggered');
  const [count, setCount] = useState(0)

  const increment = () => {
    console.log('increment triggered');
    setCount((prevState) => prevState + 1)
    incr();
  }

  return (
    <>
      <button
        className="custom-button"
        onClick={increment}
      >
        Count is {count}; Common count: { comm }
      </button>
    </>
  )
}