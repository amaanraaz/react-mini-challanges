import { useEffect, useState } from 'react'

function App() {
  const [emojis,setEmojis] = useState([]);

  useEffect(()=>{
    getAllEmojis();
  },[]);

  async function getAllEmojis (){
    const data = await fetch("https://emoji-api.com/emojis?access_key=49d69125c8c1e8b35c0a6c28e95bc4cdc3bece60");
    const json = await data.json();
    // setEmojis(json);
    console.log(json);
  }

  return (
    <>
      <h1>Helllloooooooooo</h1>
      {/* {
        emojis.map((emoji)=>(
          <h1>{emoji.character}</h1>
        ))
      } */}
    </>
  )
}

export default App
