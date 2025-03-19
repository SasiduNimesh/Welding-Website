import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AboutSecOne from '../Components/About/AboutSecOne'
import AboutSecTwo from '../Components/About/AboutSecTwo'
import AboutSecThree from '../Components/About/AboutSecThree'
import AboutSecFour from '../Components/About/AboutSecFour'

const AboutUs = () => {
  return (
    <>
        <Navbar />
        <AboutSecOne />
        <AboutSecTwo />
        <AboutSecThree />
        <AboutSecFour />
        <Footer />
    </>
  )
}

export default AboutUs