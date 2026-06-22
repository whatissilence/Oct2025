import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const getUserIdFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('userId');
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const userId = getUserIdFromQuery();
      const url = userId
        ? `http://localhost:4000/users/${userId}/posts`
        : `http://localhost:4000/posts`;
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, [location.search]);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Posts</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: '1rem' }}>
              <span>#{post.id}: </span>
              <Link to={`/posts/${post.id}`}>
                <strong>{post.title}</strong>
              </Link>
              <p>{post.body.slice(0, 100)}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
