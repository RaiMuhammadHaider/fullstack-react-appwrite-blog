import React, { useEffect, useState } from 'react';
import appwriteService from '../../appwrite/config';
import { PostCard, Container } from '../../Components';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts()
      .then((fetchedPosts) => {
        if (fetchedPosts && fetchedPosts.length > 0) {
          setPosts(fetchedPosts);
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className='w-full py-20 flex justify-center items-center'>
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-solid"></div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className='w-full py-20 text-center'>
        <Container>
          <h2 className='text-2xl font-semibold text-gray-800'>
            🚀 No posts available. Login or create a new post!
          </h2>
        </Container>
      </div>
    );
  }

  return (
    <div className='w-full py-10'>
      <Container>
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
          📝 Latest Posts
        </h1>
        <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {posts.map((post) => (
            <div 
              key={post.$id} 
              className='transform transition duration-300 hover:scale-105 hover:shadow-lg'
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
