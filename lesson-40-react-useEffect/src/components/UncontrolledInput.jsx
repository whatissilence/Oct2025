import { useRef } from 'react';

export default function UncontrolledInput() {
  const otherEmailRef = useRef(null);

  const handleClick = () => {
    if (otherEmailRef.current.value === '') {
      console.log('Email is empty!!!')
    } else if (!otherEmailRef.current.value.includes('@')) {
      console.log('Invalid email address!');
    } else {
      console.log('Email is valid')
    }
  }

  return (
    <>
      <div>
        <label>Uncontrolled Email:
          <input name="otherEmail" type="text" ref={otherEmailRef} />
        </label>
        <button onClick={handleClick} >Check email</button>
      </div>
    </>
  )
}