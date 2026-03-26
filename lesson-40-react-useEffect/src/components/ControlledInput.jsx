import { useState } from 'react';
import './ControlledInput.css';

export default function ControlledInput() {
  const [inputValue, setInputValue] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleChange = (event) => {
    const text = event.target.value;
    setInputValue(text);
    console.log('Controlled Input', text);

    if(text === '') {
      setErrorText('Email is empty');
    } else if (!text.includes('@')) {
      setErrorText('Email is not valid');
    } else {
      setErrorText('');
    }

  }

  return (
    <>
      <div>{inputValue}</div>
      <div>
        <label htmlFor="controller-input">Controlled Email:</label>
        <input id="controller-input" name="controlledEmail" type="text" value={inputValue} onChange={handleChange} />
      </div>
      <span className='error'>{errorText}</span>
    </>
  )
}