// import React,{useState, useEffect, use} from 'react'
// import { PostCard, Container } from '../../Components'
// import appwriteService from '../../appwrite/config'
// const AllPost = () => {
//     const [posts, setPosts] = useState([])
//     useEffect(()=>{},[])
//     appwriteService.getPost([]).then((posts)=>{
//         if (posts) {
//             setPosts(posts.documents)
//         }
//     })
// return (
//     <div className='w-full p-8'>
//         <Container>
//             <div className='flex flex-wrap gap-4'>
//                 {posts.map((post) => (
//                    <div key={post.$id} className='p-2 w-1/4'>
//                        <PostCard post={post} />
//                    </div>
//                 ))}
//             </div>
//         </Container>

//     </div>
//   )
// }

// export default AllPost
import React, { useState, useEffect } from 'react';
import { PostCard, Container } from '../../Components';
import appwriteService from '../../appwrite/config';

const AllPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((res) => {
      if (res) {
        setPosts(res.documents);
      }
    });
  }, []);

  return (
    <div className='w-full p-8'>
      <Container>
        <div className='flex flex-wrap gap-4'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;

