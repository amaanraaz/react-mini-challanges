import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello</h1>
      <QRCodeSVG value="hii" />
    </>
  )
}

export default App
