import React from 'react'
import gImg1 from '../../assets/g1.jpg'
import gImg2 from '../../assets/g2.jpg'
import gImg3 from '../../assets/g3.jpg'
import gImg4 from '../../assets/g4.jpg'
import gImg5 from '../../assets/g5.jpg'
import gImg6 from '../../assets/g6.jpg'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'

const images = [
    {
        id:1,
        image: gImg1,
    },
    {
        id:2,
        image: gImg2,
    },
    {
        id:3,
        image: gImg3,
    },
    {
        id:4,
        image: gImg4,
    },
    {
        id:5,
        image: gImg5,
    },
    {
        id:6,
        image: gImg6,
    },
];

const GallerySecTwo = () => {

    const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className='bg-gray-400 py-10'>
        <div className='container mx-auto px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 p-3 gap-3'>
                {images.map((img,index)=>(
                    <div key={index} 
                    className='relative group overflow-hidden rounded-lg shadow-lg cursor-pointer'
                    onMouseEnter={()=> setHoveredCard(index)}
                    onMouseLeave={()=> setHoveredCard(null)} 
                    >
                        <img src={img.image} alt='' 
                            className={`w-full h-64 object-cover transform transition duration-300 ${
                            hoveredCard === index ? "scale-110" : "scale-100"
                            }`} 
                        />
                        <div 
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredCard === index ? "bg-black opacity-80" : "opacity-0"
                        }`}
                        >
                            <div className='rounded-full p-2 bg-gray-600 '>
                                <FaSearch className='text-white text-xl hover:text-sky-600'/>
                            </div>
                        </div>
                        <div className="absolute bottom-0 w-full text-center bg-black opacity-60 text-white py-2 text-lg">
                            Lorem Ipsum Dolor Sit
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default GallerySecTwo