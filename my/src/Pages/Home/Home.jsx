import React from 'react'
import {  } from "./Home.css";
import ProfileSide from '../../Components/Profle/ProfileSide';
import PostSide from '../../Components/PostSide/PostSide';

const Home = () => {
  return (
    <div className='Home'>
     <ProfileSide/>
     <PostSide/>
     <div className="right-side">Rightside</div>
    </div>
  )
}

export default Home