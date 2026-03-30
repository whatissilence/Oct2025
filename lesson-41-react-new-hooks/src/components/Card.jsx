import './Card.css';
import {useState } from 'react';

export default function Card({ children }) {
  const [isShown, setIsShown] = useState(true);

  const handleToggleShow = () => {
    setIsShown(!isShown);
  }

  return (
    <div className="card">
      <div className='card-control' onClick={handleToggleShow}>{isShown ? 'Hide' : 'Show'}</div>
      { isShown &&
        <div>
          { children }
        </div>
      }
    </div>
  )
}