import React,{useState, useEffect, use} from 'react'
import {Container ,PostForm} from '../../Components'
import appwriteService from '../../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'
import { set } from 'react-hook-form'
const EditPost = () => {
    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if (slug) {
            appwriteService.getPostById(slug).then((post)=>{
                if (post) {
                    setPost(post);
                }
            })
        }
        else{
            navigate('/')
        }
    },[slug, navigate])
  return post? (
    <div className='p-4'>
        <Container>
            <PostForm post={post} />
        </Container> 
    </div>
  ) : null
}

export default EditPost