import { useState } from 'react'
import './index.css'

function App() {
  const [input, setInput] = useState();
  const [output,setOutput] = useState();
  const [inputUnit, setInputUnit] = useState('Celsius');
  const [outputUnit, setOutputUnit] = useState('Fahrenheit');

  const handleInput = (e)=>{
    setInput(e.target.value);
  }
  
  const handleInputUnit = (e)=>{
    setInputUnit(e.target.value);
  }

  const handleOutputUnit = (e)=>{
    setOutputUnit(e.target.value);
  }
  const handleConvert = ()=>{
    if(inputUnit=='Celsius'){
      if(outputUnit=='Fahrenheit'){
        setOutput((input*(1.8)+32).toFixed(2));
      }
      else{
        setOutput(input);
      }
    }
    else{
      if(outputUnit=='Celsius'){
        setOutput(((input-32)*(5/9)).toFixed(2));
      }
      else{
        setOutput(input);
      }
    }
  }

  return (
    <>
      <div>
        <div>
          Temperature Convertor
        </div>
        <div>
          <h2>Enter Temperature</h2>
          <div>
            <input type='number' onChange={handleInput}/>
            <select value={inputUnit} onChange={handleInputUnit}>
              <option>Celsius</option>
              <option>Fahrenheit</option>
            </select>
          </div>
          <div>
            <button onClick={handleConvert}>Convert</button>
          </div>
          <div>
            <h3>Converted Temperature : {output}</h3>
            <select value={outputUnit} onChange={handleOutputUnit}>
             <option>Fahrenheit</option>
             <option>Celsius</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
