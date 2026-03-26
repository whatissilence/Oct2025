import { useEffect, useState } from 'react';
import './User.css'

export default function User() {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState({})
  const [userId, setUserId] = useState(1)

  console.log('Component function is fired!')

  async function getUser() {
    setError('')
    setUser({})
    setIsLoading(true);

    // Синтетична пауза
    await new Promise((resolve) => { setTimeout(resolve, 3000); });

    try {
      const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Запит не вдався: ' + response.status);
          }
          return response.json(); // Парсинг тіла відповіді як JSON
        });

      setUser(user)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    console.log('useEffect triggered!')
    getUser();

  }, [userId])

  return (
    <>
      <div><input value={text} onChange={e=>setText(e.target.value)}/>{text}</div>
      <div><input type="number" value={userId} onChange={e=>setUserId(e.target.value)}/>{userId}</div>
      { isLoading && <div className="loading" >Loading...</div> }
      { error && <div className="error" >{error}</div> }
      { user.id && <div>
        User # {user.id}<br/>
        Name: {user.name}<br/>
        Email: {user.email}<br/>
        Username: {user.username}<br/>
        Phone: {user.phone}<br/>
        Website: {user.website}<br/>
      </div> }
    </>

  )
}