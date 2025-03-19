import React from 'react'
import Navbar from '../Components/Navbar'
import HomeOne from '../Components/Home/HomeOne'
import HomeAbout from '../Components/Home/HomeAbout'
import HomeService from '../Components/Home/HomeService'
import HomeProgress from '../Components/Home/HomeProgress'
import HomeGallery from '../Components/Home/HomeGallery'
import HomeForm from '../Components/Home/HomeForm'
import Footer from '../Components/Footer'
import Home from '../Components/Home/Home'
//import Gallery from '../Components/Gallery'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Home />
        <HomeOne />
        <HomeAbout />
        <HomeService />
        <HomeProgress />
        <HomeGallery />
        {/*<Gallery />*/}
        <HomeForm />
        <Footer />
    </>
  )
}

export default HomePage