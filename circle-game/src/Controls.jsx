import React from 'react'

const Controls = ({onUndo,onRedo,onReset,hasCircles,hasHistory}) => {
  return (
    <div className='controls' onClick={(e)=>e.stopPropagation()}>
        <button disabled={!hasCircles} onClick={onUndo}>Undo</button>
        <button disabled={!hasHistory} onClick={onRedo}>Redo</button>
        <button disabled={!(hasCircles)} onClick={onReset}>Reset</button>
    </div>
  )
}

export default Controls