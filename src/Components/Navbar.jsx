import React, { useState , useEffect } from 'react'
import LogoImg from "../assets/logo.png"
import { AiOutlineMenu} from 'react-icons/ai';
import { FaAddressCard,  FaHome, FaImage, FaPhone, FaPhoneVolume, FaTimes, FaTimesCircle} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const [active , setActive] = useState(location.pathname)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActive(location.pathname); // Update active state when route changes
  }, [location.pathname]);

  return (
    <div className='h-auto w-full fixed top-0 left-0 z-50'>
      <div className={`w-full mx-auto flex justify-around items-center ${
           scrolled ? "bg-sky-800 shadow-lg z-1" : "bg-transparent"}`}>
        <AiOutlineMenu 
          className='md:hidden text-3xl text-white cursor-pointer' 
          onClick={() => setIsOpen(true)}
        />
        <img src={LogoImg} alt='' className='w-20 h-20' />
        <ul className='hidden md:flex gap-7 text-white text-xl'>
          <Link to='/' 
            className={`cursor-pointer hover:text-blue-400 font-bold ${active === '/' ? 'text-blue-400':'text-white'}`} 
            onClick={()=>setActive('/')}>Home
          </Link>
          <Link to='/about' 
            className={`cursor-pointer hover:text-blue-400 font-bold ${active === '/about' ? 'text-blue-400':'text-white'}`} 
            onClick={()=>setActive('/about')}>About Us
          </Link>
          <Link to='/contact' 
            className={`cursor-pointer hover:text-blue-400 font-bold ${active === '/contact' ? 'text-blue-400':'text-white'}`} 
            onClick={()=>setActive('/contact')}>Contact Us
          </Link>
          <Link to='/gallery' 
            className={`cursor-pointer hover:text-blue-400 font-bold ${active === '/gallery' ? 'text-blue-400':'text-white'}`} 
            onClick={()=>setActive('/gallery')}>Gallery
          </Link>
        </ul>
        <Link to='/contact'>
          <button className='hidden md:block bg-blue-500 hover:bg-blue-700 text-white font-bold rounded cursor-pointer p-2' onClick={()=>setActive('/contact')}>Contact Us</button>
        </Link>
        <FaPhone className='md:hidden flex text-2xl text-white cursor-pointer' />
      </div>

      <div className={`fixed w-1/2 left-0 top-0 bottom-0 bg-white p-4 transition-transform duration-300 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='absolute flex justify-end cursor-pointer top-4 right-4'>
          <FaTimesCircle className='text-xl hover:text-red-400' onClick={() => setIsOpen(false)} />
        </div>
        <ul className='absolute flex flex-col gap-4 text-lg font-medium top-8 left-2'>
          <Link to='/' className='flex items-center gap-2 hover:text-sky-400'><FaHome />Home</Link>
          <Link to='/about' className='flex items-center gap-2 hover:text-sky-400'><FaAddressCard />About Us</Link>
          <Link to='/contact' className='flex items-center gap-2 hover:text-sky-400'><FaPhoneVolume />Contact Us</Link>
          <Link to='/gallery' className='flex items-center gap-2 hover:text-sky-400'><FaImage />Gallery</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;