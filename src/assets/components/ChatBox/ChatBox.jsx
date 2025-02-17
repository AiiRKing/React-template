import { useState } from 'react';
import './ChatBox.css';

// PostBox Component
const PostBox = () => {
  const [post, setPost] = useState(''); // State for the input field
  const [posts, setPosts] = useState([]); // State to store all posts

  // Handle input change
  const handleInputChange = (e) => {
    setPost(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.trim()) {
      setPosts([...posts, post]); // Add the new post to the list
      setPost(''); // Clear the input field
    }
  };

  return (
    <div className="post-box">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={post}
          onChange={handleInputChange}
          placeholder="What's on your mind?"
          rows={4}
          cols={50}
        />
        <br />
        <button type="submit">Post</button>
      </form>

      <div className="post-list">
        <h3>Posts</h3>
        {posts.length === 0 ? (
          <p>No posts yet. Be the first to post!</p>
        ) : (
          posts.map((p, index) => (
            <div key={index} className="post-item">
              <p>{p}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostBox;