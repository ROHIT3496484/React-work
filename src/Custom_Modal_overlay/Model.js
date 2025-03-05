import React from 'react'

const Model = ({handleclose, handleoffer }) => {
  return (
    <div className="model">
      <div className="model-content">
        <button onClick={handleclose}> X</button>
        <p> This is the offer please accept it</p>
        <button onClick={handleoffer}> offer Accept</button>
      </div>
    </div>
  )
}

export default Model
