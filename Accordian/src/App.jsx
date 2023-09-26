import './index.css'
import Accordian from './components/Accordian'
import questions from './assets/data'

function App() {
  return (
    <>
        {
          questions.map((question)=>(
            <Accordian 
              key={question.id}
              {...question} />
          ))
        }  
    </>
  )
}

export default App
