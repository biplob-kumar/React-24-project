import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import ChatMesege from './ChatMesege';




const Chatboat = () => {
  const [mesege, setMesege] = useState([
    {
      mesege: 'Hi Mai i have your name ?'
    }
  ])
  return (
    <div>
      <div className=' d-flex align-items-center justify-content-center'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Jup6Bpl5E9-B_BtqmDCppFHZmivNiUMcN1XeWuzz2Nf8nrcyqYTEuehjYjcNGaNfyOY&usqp=CAU' alt="" height='200' width='200' />
        <h3 className='text-primary'>Chat Boat </h3>
      </div>
      <div className='chat-mesege'>
        {
          mesege.length > 0 && mesege.map((data) => <ChatMesege{...data} />)
        }
        <div className='d-flex mt-2'>
          <input type="text" className='form-control' />
          <Button variant="primary" className='ms-2' >Primary</Button>
          {/* <button className='bg-primary text-white border-none'> send</button> */}
        </div>
        <div className='mt-3' id='copyright '>
          copyright reserve bangla
        </div>
      </div>
    </div>
  )
}

export default Chatboat