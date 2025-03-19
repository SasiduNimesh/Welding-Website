import { FaAngleRight, FaArrowRight, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import footerIcon from '../assets/logo.png'

const Footer = () => {
    return (
      <footer className="text-white">
        <div>
          <div className="h-auto bg-gray-700">
            <div className="container flex w-full justify-end gap-28 p-1 max-md:p-4 max-xl:gap-4 items-center text-center text-white max-xl:text-sm max-md:flex-col">
              <div className="uppercase max-md:border max-md:border-black max-md:w-full max-md:items-center">
                <h2>Location</h2>
                <p>Tampa, FLORIDA, USA</p>
              </div>
              <div className="uppercase max-md:border max-md:border-black max-md:w-full max-md:items-center">
                <h2>E-mail</h2>
                <p>welding@gmail.com</p>
              </div>
              <div className="uppercase max-md:border max-md:border-black max-md:w-full max-md:items-center">
                <h2>call now</h2>
                <p>+1 (813) 376-4007</p>
              </div>
            </div>
          </div>
          <div className="bg-black">
            <div className="flex flex-col gap-8 py-2 md:flex-row justify-around lg:px-28 md:px-16 max-xl:px-5">
              <div className=" w-full md:w-1/4">
                <div className="bg-sky-500 rounded-lg w-55 h-90 relative bottom-20 p-4 flex flex-col gap-2 max-xl:w-full max-xl:h-auto max-xl:top-5 z-30">
                  <div className="pt-5">
                    <h2 className="text-white font-bold text-2xl">A NEWSLETTER <span className="text-black">SUBSCRIPTION &nbsp;</span>
                    SERVICES IS AVAILABLE FROM US</h2>
                  </div>
                  <div>
                    <input type="text" placeholder="Your Email" className="border-none border-b-2 border-black focus:outline-none"/><hr />
                  </div>
                  <div className="pt-3 p-2 bg-black text-white rounded-md hover:bg-sky-500">
                    <button className="flex flex-row gap-2 items-center justify-center cursor-pointer ">SUBSCRIBE NOW<FaArrowRight /></button>
                  </div>
                </div>
              </div>

              <div className=" w-full md:w-1/4">
                <img src={footerIcon} alt="" className="w-40"/>
                <p className=" mb-2 text-sm">
                Unity Welding Solutions provides expert welding and fabrication services with precision and reliability.
                </p>
                <div className="flex gap-2 text-2xl text-sky-600">
                  <FaFacebook className="cursor-pointer hover:text-gray-300" />
                  <FaInstagram className="cursor-pointer hover:text-gray-300" />
                  <FaYoutube className="cursor-pointer hover:text-gray-300" />
                </div>
              </div>

              <div className=" w-full md:w-1/4">
                <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">QUICK LINKS</h1>
                <div className=" flex flex-col gap-2 font-medium">
                  <Link to="/" className=" flex items-center hover:translate-x-3 transition duration-200 ease-linear"><FaAngleRight className="text-sky-700" />Home</Link>
                  <Link to="/about" className="flex items-center hover:translate-x-3 transition duration-200 ease-linear"><FaAngleRight className="text-sky-700" />About Us</Link>
                  <Link to="/gallery" className="flex items-center hover:translate-x-3 transition duration-200 ease-linear"><FaAngleRight className="text-sky-700" />Gallery</Link>
                  <Link to="contact" className="flex items-center hover:translate-x-3 transition duration-200 ease-linear"><FaAngleRight className="text-sky-700" />Contact Us</Link>
                </div>
              </div>

              <div className=" w-full md:w-1/4">
                <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">OUR SERVICES</h1>
                <div className=" flex flex-col gap-2 font-medium">
                    <a href="#" className="flex items-center"><FaAngleRight className="text-sky-700" />Welding Repairs</a>
                    <a href="#" className="flex items-center"><FaAngleRight className="text-sky-700" />Custom Fabrication</a>
                    <a href="#" className="flex items-center"><FaAngleRight className="text-sky-700" />Structural Welding</a>
                    <a href="#" className="flex items-center"><FaAngleRight className="text-sky-700" />Ornamental Welding</a>
                    <a href="#" className="flex items-center"><FaAngleRight className="text-sky-700" />Equipment and Machinery Modifications</a>
                    <a href="#" className="flex items-center"><FaAngleRight className="text-sky-700" />Emergency Welding Services</a>
                    <a href="#" className="flex items-center"><FaAngleRight className="text-sky-700" />On-Site Welding Services</a>
                </div>
              </div>
            </div>

            <div className="flex justify-around items-center flex-row gap-12 text-gray-200">
              <div>
                <p className=" text-center py-4">
                Copyright © 2025 All Rights Reserved | Designed and developed by Make It Viral Media
                </p>
              </div>
              <div className="flex flex-row gap-3">
                <span>Privacy Policy</span>
                <span>Terms & Service</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  