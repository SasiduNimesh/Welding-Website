import React from 'react'
import Image from '../../assets/About_Welder.png'

const AboutSecFour = () => {
  return (
    <section className="bg-black h-full flex flex-col items-center justify-center p-6 max-md:relative max-md:w-full ">
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                <div className="font-bold flex flex-col gap-4">
                    <div className='flex flex-col gap-3'>
                        <p className='text-red-700 uppercase'>Vision & Mission</p>
                        <h2 className='text-white text-2xl'>Crafting Connections.<br />
                        Igniting Progress</h2>
                        <p className='text-gray-400'>At Unity Welding Solutions, we are dedicated to building strong, lasting connections—both in the welds we create and the relationships we cultivate with our clients. Our commitment to quality craftsmanship and 
                        innovative solutions drives us to continually improve and exceed expectations.</p>
                    </div>
                    <div className='bg-gray-800 opacity-70 rounded-lg p-4'>
                        <span className='text-white'>Our Vision</span>
                        <p className='text-gray-300'>
                        To become a trusted leader in the welding industry, inspiring progress 
                        through precision, innovation, and unwavering dedication to excellence.
                        </p>
                    </div>
                    <div className='bg-gray-800 opacity-70 rounded-lg p-4'>
                        <span className='text-white'>Our Vision</span>
                        <p className='text-gray-300'>
                        To become a trusted leader in the welding industry, inspiring progress 
                        through precision, innovation, and unwavering dedication to excellence.
                        </p>
                    </div>
                </div>

                <div className='items-center justify-center'>
                    <img src={Image} alt='' className='w-[200%] object-cover' />
                </div>

            </div>

      </div> 
    </section>
  )
}

export default AboutSecFour