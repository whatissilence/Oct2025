import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:4000/users');
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;

    const newUser = {
      name,
      email,
    };

    const res = await fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });

    const createdUser = await res.json();
    // Добавляем нового пользователя в конец списка
    setUsers((prev) => [...prev, { ...createdUser }]);
    setName('');
    setEmail('');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Users</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginRight: '0.5rem' }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginRight: '0.5rem' }}
          />
          <button type="submit">Add User</button>
        </div>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>
                {user.name} ({user.email})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}