import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Details() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        setError("Failed to load post.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <h4 className="text-center text-gray-600">Loading...</h4>;
  }

  if (error) {
    return <h4 className="text-center text-red-600">{error}</h4>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-6 text-purple-600">Post Details</h2>

      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-purple-600">{post.title}</h3>
        <p className="text-gray-700">{post.body}</p>
      </div>

      <button
        onClick={() => navigate("/listing")}
        className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        Back to Listings
      </button>
    </div>
  );
}

export default Details;
