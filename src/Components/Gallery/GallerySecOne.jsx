import React from 'react'

const GallerySecOne = () => {
  return (
    <div className="relative h-[500px] w-full flex bg-[url('./assets/galleryImg1.jpg')] bg-center bg-cover inset-0 bg-black bg-opacity-50 z-20 items-center justify-center">
        <div className='items-center justify-center'>
            <h2 className='text-white font-bold text-7xl text-center'>GALLERY</h2>
            <p className='text-white text-center'><span className='text-sky-400'>HOME</span> / GALLERY</p>
        </div>
    </div>
  )
}

export default GallerySecOne