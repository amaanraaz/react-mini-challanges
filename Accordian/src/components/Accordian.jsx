import React, { useEffect, useState } from 'react';

const Accordian = ({id,title,info,openId,setOpenAccordianId}) => {
  const [show,setShow] = useState(false);
  const toggleSign = ()=>{
    setShow(!show);
    setOpenAccordianId(id);
  }
  useEffect(()=>{
    if(openId){
      setShow(openId===id)
    }
  },[openId])

  return (
    <div className=' p-2 m-5 bg-slate-500 text-white text-xl border-2 border-black'>
      <div className='flex justify-between'>
        <h2 className='font-serif'>{title}</h2>
        <button onClick={toggleSign}>
          {
            show ? '-' : '+'
          }
        </button>
      </div>
      {
        show? <p className='font-mono text-base my-3'>{info}</p> : ''
      }
        
    </div>
  )
}

export default Accordian