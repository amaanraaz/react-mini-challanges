import { useState } from 'react'
import './App.css'

function App() {

  const [stack, setStack] = useState([])
  const [value,setValue] = useState();
  const [output,setOutput] = useState('');
  const [size,setSize] = useState();

  const handleValue = (e)=>{
    setValue(e.target.value);
  }

  const handlePush = ()=>{
    if(value && stack.length<size){
      setStack((prev)=>[value,...prev]);
      setOutput(`${value} is pushed into stack`)
    }
    else{
      setOutput("Stack is full")
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
    if(stack.length==size){
      setOutput("Stack is FUll");
    }
    else{
      setOutput("Stack is not full")
    }
  }


  return (
    <>
      <h1 className='heading'>Stack</h1>

      <select className='input-select' onChange={e=>setSize(e.target.value)}>
        <option>Size</option>
        <option>10</option>
        <option>20</option>
        <option>30</option>
        <option>40</option>
      </select>
      <input className='input-container' type='text' placeholder='Enter a value' onChange={handleValue}></input>
      <div className='btns'>
        <button className='btn' onClick={handlePush}>Push</button>
        <button className='btn' onClick={handlePop}>Pop</button>
        <button className='btn' onClick={handlePeek}>Peek</button>
        <button className='btn' onClick={handleEmpty}>IsEmpty</button>
        <button className='btn' onClick={handleFull}>IsFull</button>
      </div>
      <h1 className='output-txt'>{output}</h1>
      {
        stack.length && <div className='stack-container'>
          {
            stack.map((i,index)=>(
              <h1 className='stack-container' key={index}>{i}</h1>
            ))
          }
        </div>
      }
    </>
  )
}

export default App
