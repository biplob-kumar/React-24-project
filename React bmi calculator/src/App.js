
import { useState } from 'react';
import './App.css';

function App() {
  const [Weight,setWeight]=useState(0);
  const [Height,setHeight]=useState(0);
  const [Bmi,setBmi]=useState(``);
  const [messege,setmessege]=useState(``);

  // logicjks 
  let calBmi=(e)=>{
 e.preventDefault()
 if(Weight==0 || Height===0){
  alert(" Plse Enter  Value then submit ")
 }
 else{
  let Bmi =(Weight/(Height*Height)*703)
  setBmi(Bmi.toFixed(1))

  if(Bmi>25){
setmessege("You are Under Weight ")
  }
  else if(Bmi>25 && Bmi<30){
  setmessege('You are Perfect Weight  ')
  }else{
    setBmi("You are over weight ")
  }
 }
  }


  const relod =()=>{
    window.location.reload()
  }




  return (
    <div className="App">

      <div className='container'>

        <h2>BMI CALCUlATOR</h2>
        <form onSubmit={calBmi}>
          <div>
            <label> Weight (ibs) </label>
            <input type='text' placeholder='Enter weight Value' value={Weight}
            
            onChange={(e)=> setWeight(e.target.value)}
            />
          </div>
          <div>
          <label> Height (ibs) </label>
            <input type='text' placeholder='Enter weight Value' value= {Height}       onChange={(event)=> setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn ' type='submit' onSubmit={setBmi}> Submit </button>
            <button className='btn btn-outline ' type='submit' onClick={relod} > Relod </button>
          </div>
       <div className='center'>
         <h3>      Your BMI is : {Bmi} </h3>
           <p> {messege}</p>
       </div>

        </form>
      </div>



    </div>
  );
}

export default App;
