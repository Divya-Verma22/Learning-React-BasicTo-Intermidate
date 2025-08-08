import React from 'react'
import GreenBox from './GreenBox'
import BlueBox from './BlueBox'

const FinalGIF = () => {
    return (
        <div className='h-screen w-full flex flex-col background  relative overflow-x-hidden items-center'>
            <h1 className='  text-4xl font-bold text-center bg-white w-11/12 rounded-lg mt-[40px] px-10 py-2   '>Random Gifts</h1>
        <div className='flex flex-col w-full items-center gap-y-10 mt[30px]'>
            <GreenBox />    
            <BlueBox />
        </div>
        </div>

    )
}

export default FinalGIF