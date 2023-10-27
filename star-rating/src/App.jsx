import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      {/* 
      <h1>{"\u2606"}</h1> */}
      {
        [1,2,3,4,5].map((i)=>(
          <h1>{"\u2605"}</h1>

        ))
      }
    </>
  )
}

export default App
