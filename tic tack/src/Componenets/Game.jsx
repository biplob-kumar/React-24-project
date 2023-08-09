import React, { Component } from 'react'
import Bord from './Bord'

 class Game extends Component {
    state={
        history:[{Square:Array(9).fill(null)}]
    }
   onClick= i=>{
    console.log(i);
   }
    
  render() {
    return (
      <div>
        <h1>Game Component </h1>
       <Bord onClick={this.onClick} Square={this.state.history[0]}/>
      
      </div>
    )
  }
}
export default Game
