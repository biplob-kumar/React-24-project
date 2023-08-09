import React from 'react'
 import {  } from "./Posts.css";
import { PostsData } from '../../Data/PostData'
import Post from '../Post/Post'
const Posts = () => {
  return (
    <div className="Posts">
        {PostsData.map((post, id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts