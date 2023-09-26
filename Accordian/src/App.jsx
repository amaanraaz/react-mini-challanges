import './index.css'
import Accordian from './components/Accordian'
import questions from './assets/data'
import { useState } from 'react'

function App() {
  const [openId,setOpenId] = useState(null);
  const [multiple,setMultiple] = useState(true)

  const setOpenAccordianId = (id)=>{
    setOpenId(multiple?null:id);
  }

  const toggleMultiple = ()=>{
    if(multiple){
      setOpenId(-1)
    }
    setMultiple(!multiple);
  }

  return (
    <div className='p-10'>
      <label>Multiple Allowed? </label>
      <input type='checkbox' checked={multiple} onChange={toggleMultiple} ></input>
        {
          questions.map((question)=>(
            <Accordian 
              key={question.id}
              openId = {openId}
              setOpenAccordianId = {setOpenAccordianId}
              {...question} />
          ))
        }  
    </div>
  )
}

export default App
