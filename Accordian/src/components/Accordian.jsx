import React from 'react';

const Accordian = ({id,title,info}) => {
  return (
    <div>
      <div className='flex justify-between'>
        <h2 className=''>{title}</h2>
        <button>+</button>
      </div>
        <p>{info}</p>
    </div>
  )
}

export default Accordian