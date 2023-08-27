import { useState } from "react";
import "./App.css";
import { Comp1 } from "./compoents/Comp1";

function App() {

   const [x,setX]=useState(0);

  return (
    <div>
      <div>App {x}</div>
        {console.log(x+" suraj")}
      <h1>....................................0</h1>
     <Comp1 x1={x} setX1={setX}/>

     </div>
  );
}

export default App;
