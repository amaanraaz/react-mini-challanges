import { useState } from 'react'
import {FaEye, FaEyeSlash} from "react-icons/fa"
import './App.css'

function App() {
  const [view, setView] = useState(false);
  
  const handleClick = ()=>{
    setView(!view);
  }

  return (
    <>
      <div>
        <input type={view?'text':'password'} placeholder='Enter Password'></input>
        {
          view?<FaEye onClick={handleClick} />:<FaEyeSlash onClick={handleClick} />
        }
      </div>
    </>
  )
}

export default App
