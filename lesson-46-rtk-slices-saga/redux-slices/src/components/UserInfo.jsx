import { useDispatch, useSelector } from 'react-redux';
import {userLoading, userSelector } from '../redux/selectors.js';
import { useEffect, useState } from 'react';
import { getUserFromServer, setUser } from '../redux/userSlice.js';

export default function UserInfo() {
  const [inputUser, setInputUser] = useState(0);

  const loading = useSelector(userLoading);
  const user = useSelector(userSelector)
  const dispatch = useDispatch();

  const handleChangeInput = (event) => {
    setInputUser(event.target.value);
  }

  const handleClickGetUser = () => {
    const userId = Number(inputUser);

    if (isNaN(userId) || userId < 1 || userId > 10) {
      return;
    }

    dispatch(getUserFromServer(userId));
  }

  // Теж можливо і навіть простіше. Але буває, що потрібні асінхронні операції саме в редаксі
  // useEffect(() => {
  //   const user = await fetch...
  //   dispatch(setUser(user))
  // })

  return (
    <>
      <div>
        <input type="number" value={inputUser} onChange={handleChangeInput} />
        <button onClick={handleClickGetUser} >Get User</button>
      </div>
      <div>
        { loading
        ? <div>User loading!!!</div>
        : <div className="user-info">
          UserInfo:
          <div>Id: {user.id}</div>
          <div>Name: {user.name}</div>
          <div>Username: {user.username}</div>
          <div>Email: {user.email}</div>
        </div>
      }
      </div>
    </>
  )
}