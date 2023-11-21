import { useReducer, useState } from 'react'
import JobResignation from './templates/JobResignation'
import JobApplication from './templates/JobApplication';


function App() {
  const [fields,dispatch] = useReducer((state,action)=>({...state,...action}),{name:'',companyName:'',effectiveDate:'',lastDate:''});
  const [template,setTemplate] = useState('Job Resignation');
  const handleTemplate = (e)=>{
    setTemplate(e.target.value)
  }

  return (
    <>
      <div>
        <h1>Email Template</h1>
      </div>
      <div>
        <select value={template} onChange={handleTemplate}>
          <option>Job Application</option>
          <option>Job Resignation</option>
        </select>
      </div>
      <div>
        <label>Name: </label>
        <input type='text' onChange={(e)=>dispatch({name:e.target.value})} value={fields.name}></input>
        <label>Company Name: </label>
        <input type='text' onChange={(e)=>dispatch({companyName:e.target.value})} value={fields.companyName}></input>
        <label>Effective Date</label>
        <input type='date' onChange={(e)=>dispatch({effectiveDate:e.target.value})} value={fields.effectiveDate}></input>
        <label>Last Date</label>
        <input type='date' onChange={(e)=>dispatch({lastDate:e.target.value})} value={fields.lastDate}></input>
      </div>
      <div>
        {
          template==='Job Application'?<JobApplication/>:<JobResignation {...fields} />
        }
      </div>
      
    </>
  )
}

export default App
