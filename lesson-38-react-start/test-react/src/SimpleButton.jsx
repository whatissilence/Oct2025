import { useState } from 'react';
import './SimpleButton.css';

export default function SimpleButton(props) {
  const { text, start, step } = props;
  const [count, setCount] = useState(start)
  const [cl, setCl] = useState(start > 50 ? 'green' : '');


  const onButtonClick = () => {
    let innerStep = step ? step : 1;
    let newValue = count + innerStep;
    setCount(newValue);
    if (newValue > 100) {
      setCl('green')
    }
  }

  return (
    <span>
      <button className={cl} onClick={onButtonClick} >
        {text || 'Default Text'}
      </button> <span>{count}</span>
    </span>
  )
}