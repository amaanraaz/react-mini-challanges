import { useEffect, useState } from 'react'
import './index.css'

function App() {
  const [emojis,setEmojis] = useState([]);

  useEffect(()=>{
    getAllEmojis();
  },[]);

  async function getAllEmojis (){
    const data = await fetch("https://emoji-api.com/emojis?access_key=49d69125c8c1e8b35c0a6c28e95bc4cdc3bece60");
    const json = await data.json();
    setEmojis(json);
    // console.log(json);
    // console.log(emojis);
    
  }

  function copyToClipboard(emoji){
    navigator.clipboard.writeText(emoji.character);
    setTimeout(()=>{
      alert('copied sucessfullu')
      },100);
  }

  return (
    <>
      <div className='w-96 h-96 border border-black overflow-auto flex flex-wrap mx-auto my-auto'>
        {
          emojis.map((emoji,index)=>(
            <h1 key={index} className='cursor-pointer' onClick={()=>{copyToClipboard(emoji)}}>{emoji.character}</h1>
          ))
        }
      </div>
      
    </>
  )
}

export default App
