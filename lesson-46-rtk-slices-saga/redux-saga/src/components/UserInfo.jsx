import { useDispatch, useSelector } from 'react-redux';
import { userError, userLoading, userSelector } from '../redux/selectors.js';
import { useState } from 'react';
import { fetchUserRequest } from '../redux/userSlice.js';

export default function UserInfo() {
  const [inputUser, setInputUser] = useState(0);

  const loading = useSelector(userLoading);
  const user = useSelector(userSelector)
  const error = useSelector(userError);

  const dispatch = useDispatch();

  const handleChangeInput = (event) => {
    setInputUser(event.target.value);
  }

  const handleClickGetUser = () => {
    const userId = Number(inputUser);

    if (isNaN(userId) || userId < 1 || userId > 10) {
      return;
    }

    console.log(userId);
    dispatch(fetchUserRequest(userId));
  }

  if (loading) {
    return <div>User loading!!!</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>
        <input type="number" value={inputUser} onChange={handleChangeInput} />
        <button onClick={handleClickGetUser} >Get User</button>
      </div>
      <div className="user-info">
        UserInfo:
        <div>Id: {user.id}</div>
        <div>Name: {user.name}</div>
        <div>Username: {user.username}</div>
        <div>Email: {user.email}</div>
      </div>
    </>
  )
}