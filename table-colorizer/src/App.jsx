import { useState } from 'react'

function App() {
  const [colorArray, setColorArray] = useState([]);

  const handleColor = (e)=>{
    console.log(e)
  }

  return (
    <>
      <div>
        <input type='number' className='border-2 border-black'></input>
        <button className='border-2 border-black' onClick={handleColor}>Color </button>
        <button className='border-2 border-black'>Clear All</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {
          Array(9).fill("").map((e,index)=>
            <div className='border-2'>{index+1}</div>
          )
        }
      </div>
    </>
  )
}

export default App
