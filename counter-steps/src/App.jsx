import { useState } from 'react'
import './App.css'

function App() {

  const [count,setCount] = useState(0);
  const [step,setStep] = useState(1);

  const increase = ()=>{
    setCount(count+step);
  }
  const decrease = ()=>{
    if(count-step<0){
      setCount(0);
    }
    else
    setCount(count-step);
  }


  return (
    <>
      <div>
        <button onClick={decrease}>-</button>
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
      </div>
      <div>
        <p>Increment/Decrement by</p>
        <input type='number' onChange={(e)=>{setStep(+(e.target.value))}}></input>
      </div>
    </>
  )
}

export default App
