import React from 'react'
import {  } from "./PostSide.css";
import PostShare from '../PostShare/PostShare';
import Post from '../Posts/Posts';

const PostSide = () => {
  return (
    <div className='postside'>
     <PostShare/>
     <Post/>
     </div>
  )
}

export default PostSide