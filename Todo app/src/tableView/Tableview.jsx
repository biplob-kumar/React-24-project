import React from 'react'
import { CustomInput } from "reactstrap";

const RowItem = () => {
  return (
  <tr>
    <th scope='row'>
       <CustomInput
       type='Checkbox'
       id={Todo.id}
       checked={todo.isSelect}
       />
    </th>
  </tr>
  )
}

