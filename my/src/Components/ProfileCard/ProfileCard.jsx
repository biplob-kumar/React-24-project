import React from 'react'
import {  } from "./ProfileCard.css";
import  cover  from "../../img/cover.jpg";
import  profile  from "../../img/profileImg.jpg";
import {  } from "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
     <div className='ProfileImage'> 
       <img src={cover} alt="" />
       <img src={profile} alt="" />
     </div>
     <div className="ProfileName">
        <span>Biplob Kumar </span>
        <span>Bio</span>
        <span>Front-End Developer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
            <div className="follow">
                <span>1K</span>
                <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>1M</span>
                <span>Followers</span>
            </div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  )
}

export default ProfileCard