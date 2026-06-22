import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ title: '', body: '' });
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    const res = await fetch(`http://localhost:4000/posts/${id}`);
    const data = await res.json();
    setPost(data);
    setFormData({ title: data.title, body: data.body });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const res = await fetch(`http://localhost:4000/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const updated = await res.json();
    setPost(updated);
    setEditing(false);
  };

  const handleDeletePost = async () => {
    await fetch(`http://localhost:4000/posts/${id}`, {
      method: 'DELETE',
    });
    navigate('/posts');
  };

  const loadComments = async () => {
    setLoadingComments(true);
    const res = await fetch(`http://localhost:4000/posts/${id}/comments`);
    const data = await res.json();
    setComments(data);
    setShowComments(true);
    setLoadingComments(false);
  };

  const handleDeleteComment = async (commentId) => {
    await fetch(`http://localhost:4000/posts/${id}/comments/${commentId}`, {
      method: 'DELETE',
    });
    setComments((prev) => prev.filter((c) => c.id !== commentId));
  };

  if (!post) return <p>Loading post...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Post #{post.id}</h1>

      {editing ? (
        <>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            style={{ width: '100%', marginBottom: '0.5rem' }}
          />
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Body"
            rows="6"
            style={{ width: '100%', marginBottom: '0.5rem' }}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => setEditing(true)} style={{ marginRight: '1rem' }}>
            Edit
          </button>
          <button onClick={handleDeletePost} style={{ color: 'red' }}>
            Delete Post
          </button>
        </>
      )}

      <div style={{ marginTop: '2rem' }}>
        <button onClick={loadComments} disabled={loadingComments}>
          {loadingComments ? 'Loading...' : 'Load Comments'}
        </button>
      </div>

      {showComments && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Comments</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id} style={{ marginBottom: '1rem' }}>
                <span>#{comment.id}: </span>
                <strong>{comment.name}</strong> ({comment.email})
                <p>{comment.body}</p>
                <button
                  onClick={() => handleDeleteComment(comment.id)}
                  style={{ color: 'red' }}
                >
                  Delete Comment
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
