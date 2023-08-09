import React from 'react'
import Square from './Square'

function Bord(props) {
    const randerSquare=i=> <Square
       value ={props.Square[i]}
       onclick={()=>props.onclick()}
    />
  return (
    <div>

        <div className="bord-row">
            {randerSquare(0)}
            {randerSquare(1)}
            {randerSquare(2)}
            <Square value='1'/>
            <Square value='2'/>
            <Square value='3'/> 
        </div> <br />
        <div className="bord-row">
            {randerSquare(3)}
            {randerSquare(4)}
            {randerSquare(5)}
            <Square value='4'/>
            <Square value='5'/>
            <Square value='6'/> 
        </div> <br />
        <div className="bord-row">
            {randerSquare(6)}
            {randerSquare(7)}
            {randerSquare(8)}
            <Square value='7'/>
            <Square value='8'/>
            <Square value='9'/> 
        </div>
        

        
    </div>
  )
}

export default Bord