import { useState } from 'react'

function App() {
  const [colorArray, setColorArray] = useState([]);
  const [currValue,setCurrValue] = useState();

  const handleColor = (e)=>{
    if(currValue>9 || currValue<1){
      alert("Enter Valid number")
    }
    else if(colorArray.indexOf(currValue)==-1){
      setColorArray((prev)=>[...prev,currValue]);
    }   
  }

  return (
    <>
    <h1 className='flex justify-center items-center bg-pink-500 h-20 text-white font-serif font-extrabold text-2xl border-2 border-black shadow-2xl'>Table Colorizer</h1>
    <div className='flex flex-col items-center m-10'>
      <div>
        <input type='number' className='border-2 border-black px-2 py-1 rounded-xl' onChange={(e)=>(setCurrValue(parseInt(e.target.value)))} value={currValue}></input>
        <button className='border-2 border-black mx-2 px-2 py-1 bg-pink-500 text-white rounded-xl' onClick={handleColor}>Color </button>
        <button className='border-2 border-black px-2 py-1 bg-pink-500 text-white rounded-xl' onClick={()=>(setColorArray([]))}>Clear All</button>
      </div>
      <div className="grid grid-cols-3 m-5 w-60 h-40">
        {
          Array(9).fill("").map((e,index)=>
            <div className={`${
              colorArray.indexOf(index+1)!='-1'?'bg-pink-500 text-white':'bg-white text-black'}
               border border-black flex justify-center items-center `} key={index}>{index+1}</div>
          )
        }
      </div>
    </div>
    </>
  )
}

export default App
