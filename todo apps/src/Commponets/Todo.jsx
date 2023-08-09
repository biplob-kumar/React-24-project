import React from 'react'

const Todo = (props) => {
  const { title, desc } = props.todo
  const { id } = props
  const handleClick=(id)=>{
    props.onremove(id)
  }
  return (
    <article className='todo'>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button className='btn' onClick={()=>{handleClick(id)}} > <i class="fas fa-trash fa-2x    "></i> </button>
      </div>
    </article>
  )
}

export default Todo