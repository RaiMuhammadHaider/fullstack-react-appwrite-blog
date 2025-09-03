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
      <div className='w-full py-8 mt-4 text-center'>
        <Container>
          <h2 className='text-lg font-semibold'>Loading posts...</h2>
        </Container>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className='w-full py-8 mt-4 text-center'>
        <Container>
          <h2 className='text-lg font-semibold'>No posts available. Login or create a new post!</h2>
        </Container>
      </div>
    );
  }

  return (
    <div className='w-full py-8 mt-4'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
