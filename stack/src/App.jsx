import { useState } from 'react'
import './App.css'

function App() {

  const [stack, setStack] = useState([])
  const [value,setValue] = useState();
  const [output,setOutput] = useState('');

  const handleValue = (e)=>{
    setValue(e.target.value);
  }

  const handlePush = ()=>{
    if(value){
      setStack((prev)=>[value,...prev]);
      setOutput(`${value} is pushed into stack`)
    }
  }
  
  const handlePop = ()=>{
    if(stack.length){
      let popped = stack.shift();
      setStack([...stack])
      setOutput(`${popped} is popped from stack`)
    }
  }

  const handlePeek = ()=>{
    if(stack.length){
      setOutput(`Peek of stack is ${stack[0]}`);
    }
  }
  
  const handleEmpty = ()=>{
    if(!stack.length){
      setOutput("Stack is Empty");
    }
    else{
      setOutput("Stack is not Empty")
    }
  }

  const handleFull = ()=>{
    if(stack.length==10){
      setOutput("Stack is FUll");
    }
    else{
      setOutput("Stack is not full")
    }
  }


  return (
    <>
      <input type='number' placeholder='Set Stack Size'></input>
      <input type='text' placeholder='Enter a value' onChange={handleValue}></input>
      <div>
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
        <button onClick={handlePeek}>Peek</button>
        <button onClick={handleEmpty}>IsEmpty</button>
        <button onClick={handleFull}>IsFull</button>
      </div>
      <h1>{output}</h1>
      <div>
       <h1>{stack}</h1>
      </div>
    </>
  )
}

export default App