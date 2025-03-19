import React from "react";
import homeAbImg from "../../assets/welder.png";
import { FaQuoteLeft } from "react-icons/fa";

const HomeAbout = () => {
  return (
    <section className="bg-black h-full flex flex-col items-center justify-center p-4 max-md:relative max-md:w-full ">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
       
        <div className="relative flex justify-center">
          <img 
            src={homeAbImg} 
            alt="Welding" 
            className="h-[500px] w-auto rounded-lg object-cover"
          />
          <div className="absolute top-4 left-12">
            <div className="bg-blue-500 h-4 w-24"></div>
            <div className="bg-blue-500 h-24 w-4"></div>
          </div>
          <div className="absolute w-1/3 bottom-8 right-8 rounded-lg flex p-4 text-justify space-x-4 bg-yellow-500/40">
            <div className="flex text-4xl text-white">
              <FaQuoteLeft />
            </div>
            <div className="text-center">
              <p className="text-4xl text-sky-800 font-bold">125 +</p>
              <p className="text-md text-white font-semibold">Projects Completed</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center max-md:text-center">
          <div className="flex flex-col gap-3">
            <h3 className="text-blue-500 text-sm font-bold uppercase">About Us</h3>
            <h2 className="text-4xl text-white lg:text-6xl font-extrabold leading-tight">
              Welding Craftsmanship <br /> Forging Excellence
            </h2>
            <p className="text-gray-400">
              We specialize in delivering exceptional welding solutions with precision and dedication. 
              Our mission is to craft excellence in every weld, ensuring durability, functionality, and artistry.
            </p>
            
            <div className="text-center bg-gray-900 p-6 rounded-lg flex flex-col top-4">
              <p className="italic text-lg text-gray-300 ">
                <span className="text-blue-500 text-2xl mr-2">“</span>
                Seamlessly combining artistry and precision, we transform visions into reality—one weld at a time.
              </p>
              <p className="mt-4 text-right font-bold">Weld Unity Team</p>
            </div>

            <button className="w-1/3 bg-blue-500 text-white font-bold rounded hover:bg-red-700 py-2 px-4">
              <a href="/about">More About Us</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
