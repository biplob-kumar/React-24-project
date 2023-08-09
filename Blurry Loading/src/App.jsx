import React, { useEffect, useState } from 'react'
import RingLoader

from "react-spinners/RingLoader";

const App = () => {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
setLoading(true)

setTimeout(() => {
  setLoading(false)
}, 3000);

  },[])

  return (

    <div className='App'>
      {
        loading ? 
        <RingLoader


        size={100}
        color={"#36d7b7"}
        loading={loading}
      />
      :
     <div>
      <h2>Hellow World </h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, consequatur atque tenetur minus quam facere porro pariatur ipsam ullam architecto Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut laborum soluta, nihil ea ex voluptatibus! Assumenda, totam illum! Veritatis iusto voluptates aspernatur eius non quos tenetur nihil esse! Quisquam corrupti deserunt architecto minima ullam, facere, a iste earum nemo cupiditate distinctio tempore nesciunt et! Tempora beatae laboriosam enim accusamus molestiae.
      </p>
      </div>
}
    </div>


  
  )
}

export default App