import React, { useState } from 'react'

const NewTodoForm = (props) => {
    const [todo,SetTodo]=useState({title:"",desc:""});
    const {title,desc}=todo

    const hnadlechan =(e)=>{
   const name=e.target.name;
   SetTodo((oldTodo)=>{
    return {...oldTodo,[name]:e.target.value}
   })
    }
    const handlesubmit=(e)=>{
       e.preventDefault()
      props.onAddTodo(todo);
       SetTodo({title:'' ,desc:''})
    }
  return (
    <div>
        <form className='form' onSubmit={handlesubmit} >
     <div className='form-field'>
     <label htmlFor="title">Title:</label>
            <input type="text" id='title' name='title' value={title} onChange={hnadlechan} />
     </div>
        <div className='form-field'>
        <label htmlFor="desc">desc:</label>
           <textarea type="text" name="desc" id="desc" value={desc}  onChange={hnadlechan} ></textarea>
           <button type='submit'> Add todo  </button>
        </div>
        </form>
    </div>
  )
}

export default NewTodoForm