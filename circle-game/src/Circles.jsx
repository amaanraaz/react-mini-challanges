import React from 'react'

const Circle = (
    {
        x,
        y,
        bgColor
    }
)=>{
    return <div className='circle' style={{
        backgroundColor:bgColor,
        top:`${y-24}px`,
        left:`${x-24}px`
    }}></div>
}

const Circles = ({circles}) => {
  return (
    <div>
        {
            circles.map((circle)=>(
                <Circle key={circle.id} {...circle}/>
            ))
        }
    </div>
  )
}

export default Circles