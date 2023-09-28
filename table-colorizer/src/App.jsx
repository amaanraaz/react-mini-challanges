import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
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
