import './UserLabel.css';
import { useState } from 'react';

export default function UserLabel({src, userName, desc}) {
  const [isDescVisible, setIsDescVisible] = useState(false)

  const handleMainClick = () => {
    setIsDescVisible(!isDescVisible)
  }

  return (
    <div className="user-label" onClick={handleMainClick}>
      <div className="user-label-main">
        <span className="user-label-text">{userName}</span>
        <img src={src} alt={userName} />
      </div>
      <div>
        {desc && isDescVisible && <span className="user-label-desc">{desc}</span>}
      </div>
    </div>
  )
}