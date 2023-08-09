import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container my-5">
       <div className="card text-center my-5">
         <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h2> {count}</h2>
            <button className='btn 'onClick={()=>setCount(count+1)} >Incriment</button>
            <button className='btns' onClick={()=>setCount(count*0)} disabled={count===0} >Reset</button>
            <button className='btn' onClick={()=>setCount(count-1)}  disabled={count===0} >Decriment</button>
         
           
          </div>
         </div>
       </div>
     
    </div>
  )
}

export default App
