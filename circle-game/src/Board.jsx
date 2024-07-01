import React, { useState } from 'react';
import colors from './constant';
import Circles from './Circles';
import Controls from './Controls';

const getRandomColor = ()=>{
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

const Board = () => {
    const[circles,setCircles] = useState([]);
    const[history,setHistory] = useState([]);

    const handleClick = (e)=>{
        setCircles((prev) => {
            return(
                [...prev,
                    {
                        x: e.clientX,
                        y: e.clientY,
                        id: new Date(),
                        bgColor: getRandomColor()
                    }
                ]
            )

        })
    }

    const handleUndo = () => {
        const copy = [...circles];
        const lastCircle = copy.pop();
        setHistory((prev)=>[...prev,lastCircle]);
        setCircles(copy);
    }

    const handleRedo = () => {
        const copy = [...history];
        const newCircle = copy.pop();
        setHistory(copy);
        setCircles((prev)=>[...prev,newCircle])
    }

    const handleReset = () => {
        setHistory([]);
        setCircles([]);
    }

  return (
    <div className='board' onClick={handleClick}>
        <Circles circles={circles}/>
        <Controls 
        hasCircles={circles.length}
        hasHistory={history.length}
        onUndo={handleUndo} 
        onRedo={handleRedo} 
        onReset={handleReset}/>
    </div>
  )
}

export default Board