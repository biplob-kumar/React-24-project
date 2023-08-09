import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
  console.log(props.todos);
  return (
    <div>

      <section className='todos'>
        {
          props.todos.map((todo) => 
          (<Todo todo={todo.todo} key={todo.id} id={todo.id}  onremove={props.onremove} />

          ))
        }
      </section>

    </div>
  )
}

export default Todos