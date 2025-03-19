import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import GallerySecOne from '../Components/Gallery/GallerySecOne'
import GallerySecTwo from '../Components/Gallery/GallerySecTwo'

const Gallery = () => {
  return (
    <>
        <Navbar />
        <GallerySecOne />
        <GallerySecTwo />
        <Footer />
    </>
  )
}

export default Gallery