import React, { useState } from 'react'
import { useState } from 'react';

const GreenBox = () => {
    const [gif , setGif] = useState("");

    function actionHandler(){

    }

  return (
    <div className='w-1/2 border h-[450px] bg-green-500 rounded'>
        <h1>Random Gift</h1>
        <button onClick={actionHandler} className='border bg-blue-300'>
            Generate
        </button>
        </div>
  )
}

export default GreenBox