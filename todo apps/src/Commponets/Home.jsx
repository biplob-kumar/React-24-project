import React, { useState } from 'react'
import Todos from './Todos'
import NewTodoForm from './NewTodoForm'
import { v4 as uuidv4  } from "uuid";


const damytodos=[
    {
      id:1,
      title:'todos title 1',
      desc:"todos1 desc is here "
    },
    {
      id:2,
      title:'todos title 2',
      desc:"todos1 desc is here "
    },
    {
      id:3,
      title:'todos title 3',
      desc:"todos1 desc is here "
    }
  ]

const Home = () => {
  const [todos,SetTodos]=useState([])
  const handleTodo=(todo)=>{
  SetTodos((prevtodos)=>{
    return [...prevtodos,{ id: uuidv4(),todo}]
  })
  }
  const handlerem=(id)=>{

SetTodos((prevtodos)=>{
  const filteretodos=prevtodos.filter((todo)=>todo.id =!id)
  return filteretodos
})
  }
  return (
    <div className="container">
      <h1 style={{color:'white'}} >Todo App </h1>
      <NewTodoForm onAddTodo={handleTodo}/>
        <Todos todos={todos} onremove={handlerem} />
    </div>
  )
}

export default Home