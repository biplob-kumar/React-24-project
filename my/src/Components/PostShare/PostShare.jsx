import React, { useRef, useState } from 'react'
import {  } from "./PosstShare.css";
import  ProfileImg  from ".././../img/profileImg.jpg";



const PostShare = () => {

  const [img,setImg]=useState(null)
  const imgRef=useRef()

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImg({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className='PostShare'>
     <img src= {ProfileImg} alt="" />
     <div>
        <input type="text" placeholder='What,s Happening ' />
    </div>
    <div className="postOptions"> 
      <div className="option">
      <i class="fa-solid fa-image" onClick={()=>imgRef.current.click()} ></i> Photo 
      <i class="fa-solid fa-video" onClick={()=>imgRef.current.click()} ></i> Video
      <i class="fa-solid fa-location-dot"></i> Location

      
     <button 
      className='share-btn' > <i class="fa-solid fa-share"></i> 
     </button>
     <div style={{display:"none"}}>
      <input type="file"  name='myImage' ref={imgRef} onChange={onImageChange}/>
     </div>
      </div>

     {img && (

<div className="previewImage">
   onClick={()=>setImg(null)}
  <img src={img.img} alt="" />
</div>

)}

    </div>
    </div>

  )
}

export default PostShare