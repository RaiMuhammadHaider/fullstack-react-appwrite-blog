import React from 'react'
import services from '../appwrite/config'
import { Link } from 'react-router-dom'
const PostCard = ({
    title, $id, featuredImage
}) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={services.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold' >{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard