import React from 'react'
import Img from './../assets/homeImg1.jpg'
import video from '../assets/vedio.mp4'

const Gallery = () => {
  return (
    <section className="relative bg-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
            <div className='text-center mb-12'>
                <h3 className="text-lg uppercase text-gray-400">UNITY WELDING METAL FABRICATION</h3>
                <h2 className="text-5xl font-extrabold text-gray-900">OUR 
                    <span className="primary-color-text-500">GALLERY</span>
                </h2>
            </div>
            <div className="container mx-auto px-0 hidden md:block">
                <div className=" grid md:grid-cols-2 lg:grid-cols-4">
                    <div className="h-72 bg-[#303849] flex items-center justify-center">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold primary-color-text-500">MOBILE WELDING REPAIRS</h3>
                            <p className="text-gray-300 mt-2">Delivering expert on-site welding services to address repairs and damages efficiently.</p>
                            <button className="mt-4 px-4 py-2 border primary-color-border-500 primary-color-text-500 rounded primary-color-bg-500-hover hover:text-black transition">Read More</button>
                        </div>
                    </div>
                    <div class="h-72">
                        <img src={Img} alt="" loading="lazy" width="800" height="600" className="object-cover h-full w-full" />
                    </div>
                    <div className="h-72 primary-color-bg-500 flex items-center justify-center">
                        <div class="p-6"><h3 class="text-2xl font-bold text-white">CUSTOM FABRICATION</h3>
                            <p className="text-gray-300 mt-2">Crafting tailored metalwork with precision and innovation to meet your unique needs.</p>
                            <button className="mt-4 px-4 py-2 border border-white text-white rounded primary-color-bg-500-hover hover:text-black transition">Read More</button>
                        </div>
                    </div>
                    <div class="h-72">
                        <img src={Img} alt="" loading="lazy" width="800" height="600" className="object-cover h-full w-full" />
                    </div>
                    <div className="h-72 bg-sky-500 flex items-center justify-center">
                        <div class="p-6"><h3 class="text-2xl font-bold text-white">CUSTOM FABRICATION</h3>
                            <p className="text-gray-300 mt-2">Crafting tailored metalwork with precision and innovation to meet your unique needs.</p>
                            <button className="mt-4 px-4 py-2 border border-white text-white rounded primary-color-bg-500-hover hover:text-black transition">Read More</button>
                        </div>
                    </div>
                    <div class="h-72">
                        <img src={Img} alt="" loading="lazy" width="800" height="600" className="object-cover h-full w-full" />
                    </div>
                    <div class="relative col-span-2 h-72 bg-gray-500 overflow-hidden">
                        <video autoPlay loop muted className="h-full w-full object-cover">
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </section >
  )
}

export default Gallery