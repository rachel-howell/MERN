import React from 'react'
import { useParams } from 'react-router-dom';

const Input = () => {
    const { input, text, bg } = useParams();

  return (
    <div className="route-div" style={{ color: text, backgroundColor: bg}}>
        {
            isNaN(input) ? <h1>The word is: {input}</h1> : <h1>The number is: {input}</h1>
        }
    </div>
  )
}

export default Input