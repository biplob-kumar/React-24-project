import React from 'react'

const ChatMesege = (props) => {
  return (
    <div>

{
  props.user ? (
    <span>
        <span> {props.mesege} </span>
        <i class="bi bi-person"></i>
    </span>
  )
}

    </div>
  )
}

export default ChatMesege