import React from 'react'

const AboutSecThree = () => {
  return (
    <div className='bg-gray-700 opacity-70 h-auto w-full'>
        <div className='flex gap-5 items-center justify-around p-4 max-md:flex-col'>
            <div className='text-center'>
                <span className='text-3xl font-bold text-yellow-400'>2005</span>
                <p className='text-white fond-bold'>Company Established</p>
            </div>
            <div className="h-16 w-[2px] bg-white max-md:hidden"></div>
            <div className='text-center'>
                <span className='text-3xl font-bold text-yellow-400'>255</span>
                <p className='text-white fond-bold'>Projects Done</p>
            </div>
            <div className="h-16 w-[2px] bg-white max-md:hidden"></div>
            <div className='text-center'>
                <span className='text-3xl font-bold text-yellow-400'>20+</span>
                <p className='text-white fond-bold'>Business Partners</p>
            </div>
            <div className="h-16 w-[2px] bg-white max-md:hidden"></div>
            <div className='text-center'>
                <span className='text-3xl font-bold text-yellow-400'>205</span>
                <p className='text-white fond-bold'>Happy Clients</p>
            </div>
        </div>
    </div>
  )
}

export default AboutSecThree