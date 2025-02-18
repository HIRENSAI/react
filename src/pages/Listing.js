import { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";

const Listing = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      const photosRes = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`);

      if (res.data.length === 0) {
        setHasMore(false);
        return;
      }

      const combinedPosts = res.data.map((post, index) => ({
        id: post.id,
        title: post.title,
        body: post.body,
        thumbnail: photosRes.data[index]?.thumbnailUrl || "https://via.placeholder.com/150",
      }));

      setPosts((prev) => [...prev, ...combinedPosts]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-6 text-purple-600">Posts Listing</h2>

      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={<h4 className="text-center text-gray-600">Loading more posts...</h4>}
        className="w-full max-w-5xl"
      >
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Thumbnail</th>
              <th className="p-3">Title</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr
                key={post.id}
                onClick={() => navigate(`/details/${post.id}`)}
                className="cursor-pointer hover:bg-purple-100 transition"
              >
                <td className="p-3 text-center border">{post.id}</td>
                <td className="p-3 border">
                  <img src={post.thumbnail} alt="Thumbnail" className="w-16 h-16 rounded-lg" />
                </td>
                <td className="p-3 border">{post.title}</td>
                <td className="p-3 border">{post.body.substring(0, 100)}...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfiniteScroll>
    </div>
  );
};

export default Listing;
