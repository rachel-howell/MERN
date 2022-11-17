import React from 'react'
import { useParams } from 'react-router-dom';

const SimpleInput = () => {
    const { simInput } = useParams();

  return (
    <div>
        {
            isNaN(simInput) ? <h1>The word is: {simInput}</h1> : <h1>The number is: {simInput}</h1>
        }
    </div>
  )
}

export default SimpleInput