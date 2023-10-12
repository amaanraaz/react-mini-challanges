import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quote,setQuote] = useState("hello");
  const [author,setAuthor] = useState("hi");
  const [tag,setTag] = useState("");

  useEffect(()=>{
    getQuote();
  },[])

  async function getQuote(){
    const data = await fetch("https://api.quotable.io/quotes/random?tags="+tag);
    const json = await data.json();
    if(Object.keys(json).length){
    setQuote(json[0].content);
    setAuthor(json[0].author);
    }
    else{
      setQuote("No Quote Found!!");
      setAuthor("N/A");
    }
  }

  return (
    <>
      <h1>Quote Generator</h1>
      <h2>{quote}</h2>
      <p>Author - {author}</p>
      <input type='text' onChange={(e)=>setTag(e.target.value)} placeholder='Enter tags'></input>
      <button onClick={()=>getQuote()}>Generate Quote</button>

    </>
  )
}

export default App
