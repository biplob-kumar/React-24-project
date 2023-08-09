import React from 'react'
import Heeader from './Heeader'
import { Outlet } from 'react-router-dom'



const Home = () => {
  return (
    <div >
   <Heeader/>
     
        <Outlet/>

        <section className='home'>
    <h1>about page</h1>
    <button>Go to about</button>
</section>
    </div>
  )
}

export default Home