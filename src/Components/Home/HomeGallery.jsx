import React from "react";
import GalImg1 from '../../assets/homeImg1.jpg'
import GalImg2 from '../../assets/homeImg2.jpg'
import GalImg3 from '../../assets/homeImg3.jpg'
import video from '../../assets/vedio.mp4'

const HomeGallery = () => {
  return (
      <div className="h-screen flex flex-col items-center justify-center gap-8 bg-white max-xl:h-auto max-xl-relative max-xl:top-3">
        <div className="text-center">
            <p className="text-gray-500">UNITY WELDING METAL FABRICATION</p>
            <h1 className="font-bold text-3xl text-black uppercase">
                Our <span className=" text-sky-600">Gallery</span>
            </h1>
        </div>
        <div className="w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 mx-auto p-3 max-xl:h-[200%]">
            <div className="h-65 bg-gray-800 p-6 flex flex-col gap-5 items-center justify-center">
                <div className="w-[90%] flex flex-col gap-2">
                    <h2 className="text-sky-300 text-lg font-bold">MOBILE WELDING REPAIRS</h2>
                    <p className="text-sm text-white">
                    Delivering expert on-site welding services to address repairs and damages efficiently.
                    </p>
                    <button className="w-1/2 text-sm text-gray-300 border-1 border-blue rounded-md hover:bg-sky-700 cursor-pointer">Read More</button>
                </div>
            </div>
            <div className="flex h-65 object-cover">
                <img src={GalImg1} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="h-65 bg-sky-800 p-6 flex flex-col gap-5 items-center justify-center">
                <div className="w-[90%] flex flex-col gap-2">
                    <h2 className="text-white text-lg font-bold">CUSTOM FABRICATION</h2>
                    <p className="text-sm text-white">
                    Crafting tailored metalwork with precision and innovation to meet your unique needs.
                    </p>
                    <button className="w-1/2 text-sm text-gray-300 border-1 border-white rounded-md hover:bg-gray-700 cursor-pointer">Read More</button>
                </div>
            </div>
            <div className="h-65 object-cover">
                <img src={GalImg2} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="h-65object-cover">
                <img src={GalImg3} alt="" className="h-full w-full object-cover" />      
            </div>
            <div className="h-65 bg-gray-800 p-6 flex flex-col gap-5 items-center justify-center">
                <div className="w-[90%] flex flex-col gap-2">
                    <h2 className="text-sky-300 text-lg font-bold">STRUCTURAL WELDING</h2>
                    <p className="text-sm text-white">
                    Ensuring strong and secure welds for residential, commercial, and industrial structures.
                    </p>
                    <button className="w-1/2 text-sm text-gray-300 border rounded-md hover:bg-sky-700 cursor-pointer">Read More</button>
                </div>
            </div>
            <div className="relative col-span-2 h-65 overflow-hidden">
                <video className="h-full w-full object-cover" controls loop muted autoPlay>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
      </div>
  );
};

export default HomeGallery;