import { useState } from 'react'
import QRCode from 'qrcode.react'

function App() {
  const [text, setText] = useState('');
  const [value,setValue] = useState('');

  return (
    <>
      <h1 className='heading'>QR Code Generator</h1>
      <div className='container'>
        <input type='text' className='input-box' placeholder='Enter Text Here' onChange={(e)=>(setText(e.target.value))}></input>
        <button className='generate-btn' onClick={()=>(setValue(text))}>Generate QR Code</button>
        {
          value&& <QRCode value={value} size={200}/>
        }
      </div>
    </>
  )
}

export default App
