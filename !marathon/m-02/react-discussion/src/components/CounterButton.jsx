import './CounterButton.css'
import { useState } from 'react';

export default function CounterButton({ limit }) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  let isButtonDisabled = (limit !== undefined && count >= limit);
  const buttonClass = isButtonDisabled ? 'error' : 'success';

  return (
    <button
      className={buttonClass}
      disabled={isButtonDisabled}
      onClick={handleClick}
    >
      Count is {count}
    </button>
  )
}