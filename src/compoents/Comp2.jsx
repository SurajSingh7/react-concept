import React from 'react'

export const Comp2 = ({x2,setX2}) => {

    function pink(){
        setX2(x2+1);
    }

  return (
    <div>
       <div >Comp2{x2}</div>
       {console.log(x2+" singh")}
       <h1>....................................2</h1>
       <button onClick={pink}> sumit2-{x2} </button>

   </div>
  )
}
