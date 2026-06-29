import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts, deletePost } from "../services/authService";
import { getCurrentUser } from "../utils/auth";
import "./Home.css";

function Home() {
  const [posts, setPosts] = useState([]);

  const token = localStorage.getItem("token");
  const currentUser = getCurrentUser();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    }

    try {
      await deletePost(id);
      fetchPosts();
    } catch (error) {
      alert(error.response?.data?.message || "Failed to delete post");
    }
  };

  // Has the logged-in user written at least one post?
  const hasUserPosts =
    currentUser &&
    posts.some((post) => post.author?._id === currentUser.id);

  return (
    <>
      <section className="hero">
        <h1>Welcome to Blog Platform</h1>

        <p>
          Share your ideas, write stories, and explore articles created by the
          community.
        </p>

        {token && (
          <Link to="/create" className="hero-btn">
            {hasUserPosts ? "Write Another Post" : "Write Your First Post"}
          </Link>
        )}
      </section>

      <h2 className="page-title">Latest Blog Posts</h2>

      {posts.length === 0 ? (
        <div className="empty-state">
          <h2>No blog posts yet</h2>
          <p>Create your first post to get started.</p>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post._id} className="post-card">
              <h3>{post.title}</h3>

              <p className="post-content">{post.content}</p>

              <div className="post-footer">
                <span className="author">
                  👤 {post.author?.name || "Unknown Author"}
                </span>

                {token &&
                  currentUser &&
                  currentUser.id === post.author?._id && (
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <Link
                        to={`/edit/${post._id}`}
                        className="edit-btn"
                      >
                        Edit
                      </Link>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(post._id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Home;