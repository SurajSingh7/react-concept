import React from 'react'
import { Comp2 } from './Comp2'

export const Comp1 = ({x1,setX1}) => {

    function pink(){
        setX1(x1+1);
    }

  return (
    <div>
       <div>Comp1 {x1}</div>
       {console.log(x1+" midd")}
       <h1>....................................1</h1>
       <button onClick={pink}> sumit1-{x1} </button>
      < Comp2 x2={x1} setX2={setX1}/>
     

   </div>
  )
}
