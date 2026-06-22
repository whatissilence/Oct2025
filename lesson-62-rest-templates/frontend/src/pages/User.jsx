import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    const res = await fetch(`http://localhost:4000/users/${id}`);
    const data = await res.json();
    setUser(data);
    setFormData(data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const res = await fetch(`http://localhost:4000/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const updated = await res.json();
    setUser(updated);
    setEditing(false);
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>User Detail</h1>

      {editing ? (
        <div style={{ marginBottom: '1rem' }}>
          <input
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            placeholder="Name"
            style={{ marginBottom: '0.5rem', display: 'block' }}
          />
          <input
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            placeholder="Email"
            style={{ marginBottom: '0.5rem', display: 'block' }}
          />
          <input
            name="phone"
            value={formData.phone || ''}
            onChange={handleChange}
            placeholder="Phone"
            style={{ marginBottom: '0.5rem', display: 'block' }}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div style={{ marginBottom: '1rem' }}>
          <p><strong>Id:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company?.name}</p>
          <p><strong>Address:</strong> {user.address?.street}, {user.address?.city}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}

      <Link to={`/posts?userId=${user.id}`}>View User's Posts</Link>
    </div>
  );
}
