import React from 'react'
import propTypes from "prop-types";
import {ListGroup, ListGroupItem,CustomInput,Button, ListGroup  } from "reactstrap";
import Todos from '../Todos/Todos';

const Listitem = ({todo,toggleSelect,toggleComplete}) => {
  return (
    <div>

        <ListGroupItem className='d-flex align-items-center'>
           <CustomInput
            type='checkbox'
            id={todo.id}
            checked={todo.isSelect}
            onChange={()=>toggleSelect(todo.id)}
           />
           <div className="mx-3">
            <h4>{todo.text}</h4>
            <p>{todo.time.toDateString()}</p>
           </div>
           <Button className='ml-auto' color={todo.isComplete ? 'danger': 'success'} onClick={()=>toggleComplete(todo.id)}>
             {todo.isComplete ? 'completed': 'Running'}
           </Button>
        </ListGroupItem>
    </div>
  )
}




ListView.prototype={
  todo:propTypes.object.isRequired,
  toggleSelect:propTypes.func.isRequired,
  toggleComplete:propTypes.func.isRequired
}

const ListView=({todo,toggleSelect,toggleComplete})=>{
    return
    <ListGroup>
        {
            Todos.map(todo=>(
                  <Listitem
                  key={todo.id}
                  todo={todo}
                  toggleSelect={toggleSelect}
                  toggleComplete={toggleComplete}
                  />
            ))
        }
    </ListGroup>
}

export default ListView