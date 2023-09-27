import { useState } from 'react'
import './index.css'

function App() {
  const [theme,setTheme] = useState('light');
  const toggleTheme = ()=>{
    if(theme==='light'){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }
  return (
    <div className={`${theme==='light'?'bg-white':'bg-black'} w-full h-screen flex flex-col items-center`}>
      <h1 className={`${theme==='light'?'text-black':'text-white'} font-semibold font-serif text-5xl mt-10` }>
        Theme Toggle</h1>
      <div>  
        <button className={`${theme==='light'?'bg-pink-500':'bg-pink-950'} text-white font-mono p-2 mt-8`}
          onClick={toggleTheme}
        >Toggle</button>
      </div>
    </div>
  )
}

export default App
