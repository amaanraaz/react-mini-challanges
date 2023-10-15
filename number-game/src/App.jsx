import { useEffect, useState } from 'react'

function App() {
  const [value, setValue] = useState(1);
  const [randomNumber,setRandomNumber] = useState();
  const [equal,setEqual] = useState(false);
  const [low,setLow] = useState(false);
  const [high,setHigh] = useState(false);

  useEffect(()=>{
    setRandomNumber(Math.round(Math.random()*100));
  },[])

  const handleValue = (e)=>{
    setEqual(false);
    setHigh(false);
    setLow(false);
    setValue(e.target.value)
  }

  const handleCheck = ()=>{
    if(value<randomNumber){
      setLow(true);
    }
    else if(value>randomNumber){
      setHigh(true);
    }
    else{
      setEqual(true);
    }
  }

  const handleReset = ()=>{
    setValue(1);
    setEqual(false);
    setHigh(false);
    setLow(false);    
  }

  return (
    <>
      <h1 className='heading'>Guess the number</h1>
      <div className='container'>
        <h3>Guess a number between 0 and 100</h3>
        <input type='number' value={value} className='input-box' onChange={handleValue}></input>
        <div>
          <button className='reset-btn' onClick={handleReset}>Reset</button>
          <button className='check-btn' onClick={handleCheck}>Check</button>
        </div>
        <div className='result'>
          {
            low && <h1>Your Guess is <b>Low</b> then the actual number</h1>
          }
          {
            high && <h1>Your Guess is <b>High</b> then the actual number</h1>
          }
          {
            equal && <h1>Congratulations!!! Your Guess is <b>Equal</b> to the actual number</h1>
          }
        </div>
      </div>
    </>
  )
}

export default App
