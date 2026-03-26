import { useEffect, useState } from 'react';
import './Timer.css'

export default function Timer() {
  const [timerText, setTimerText] = useState('');

  useEffect(() => {
    // Місце яке запускається коли компонент додається на сторінку
    const timerId = setInterval(() => {
      const text = (new Date()).toLocaleTimeString();
      setTimerText(text);
      console.log('Timer click', text)
    }, 1000)
    console.log('Start timer', timerId)

    return () => {
      // Місце яке спрацьовує коли компонент видаляється зі сторінки
      console.log('Stop timer', timerId)
      clearInterval(timerId);
    }
  }, [])

  return (
    <div className='timer'>{timerText}</div>
  )
}