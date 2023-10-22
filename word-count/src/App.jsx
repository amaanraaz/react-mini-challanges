import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [paraCount, setParaCount] = useState(0);

  const countWords = ()=>{
    const word = text.split(/\s+/).filter((i)=>i!=='');
    const char = text.length;
    const para = text.split(/\n/).filter((i)=>i.trim() !=='');

    setWordCount(word.length);
    setCharCount(char);
    setParaCount(para.length);
  }

  const handleClear = ()=>{
    setWordCount(0);
    setCharCount(0);
    setParaCount(0);
    setText('')
  }

  return (
    <>
     <div>
      <h1 className='heading'>Word Count</h1>
      <div className='body'>
        <div>
          <textarea className='textarea' placeholder='Enter text here ...' onChange={(e)=>(setText(e.target.value))} value={text}/>
        </div>
        <div>
          <div>Words: {wordCount}</div>
          <div>Chars: {charCount}</div>
          <div>Paras: {paraCount}</div>
          <button className='btn' onClick={countWords}>Count</button>
          <button className='btn' onClick={handleClear}>Clear</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
