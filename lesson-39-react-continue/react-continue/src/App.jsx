import './App.css'
import CustomButton from './components/CustomButton.jsx';
import User from './components/User.jsx';
import { useState } from 'react';
import { users } from './data/usersFromServer.js'

function App() {
  const [commonCount, setCommonCount] = useState(0);
  const [isShowButtons, setIsShowButtons] = useState(true);

  const incFunc = () => {
    setCommonCount(commonCount + 1)
    if (commonCount + 1 > 10) {
      setIsShowButtons(false);
    }
  }

  return (
    <div className='parent-container'>
      Common count: {commonCount}
      <div>
        {
          isShowButtons ? (
            <CustomButton comm={commonCount} incr={incFunc} />
          ) : (
            <span>Button is unavailable</span>
          )
        }

      </div>

      <div className="test">
        { isShowButtons && <CustomButton comm={commonCount} incr={incFunc} /> }
      </div>

      <div>
        <CustomButton comm={commonCount} incr={incFunc} />
      </div>

      <div>
        <CustomButton comm={commonCount} incr={incFunc} />
      </div>

      {
        users.map((user) => <User
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          website={user.website}
        />
        )
      }


    </div>
  )
}

export default App
