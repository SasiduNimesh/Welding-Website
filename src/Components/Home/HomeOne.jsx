import React from 'react'
import homeOneImg from '../../assets/welder.png'
import { FaCertificate, FaMedal, FaTags } from 'react-icons/fa'

const HomeOne = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
        <div className="flex w-3/4 h-[250px] max-xl:h-full max-md:w-full bg-[url('https://img.freepik.com/free-psd/modern-abstract-purple-gradient-background_84443-3770.jpg')] bg-center bg-cover bottom-4">
            <div className="lg:px-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="order-1 lg:order-2 h-[320px] relative bottom-0 bg-sky-600 text-white rounded-lg items-center justify-center overflow-clip max-xl:items-center bottom-17 max-xl:h-full max-xl:top-2 p-2">
                    <div className="absolute items-right bottom-0 right-0">
                        <img 
                            alt="" 
                            className="w-[300px]"
                            src={homeOneImg}
                        />
                    </div>
                    <div className="relative flex flex-col justify-around gap-2 z-10">
                        <h2 className="text-5xl lg:text-6xl font-bold">25 +</h2>
                        <p className="text-lg font-bold mt-2">YEAR OF EXPERIENCE</p>
                        <p className="text-gray-200 mt-4">Delivering expertise and trusted solutions built over decades of dedication.</p>
                        <a className="flex w-1/3 bg-white text-center text-sky-600 font-bold rounded hover:bg-gray-200 transition" href="/contact">
                            CONTACT US
                        </a>
                    </div>
                </div>

                <div className="order-2 lg:order-1 lg:col-span-2 grid grid-cols-3 text-center justify-center flex flex-col gap-3 max-md:flex-row max-md:gap-4 max-md:grid-cols-1 max-lg:p-2">
                    <div>
                        <h3 className="flex text-lg text-white font-bold mt-4 text-left"><FaMedal className='text-lg text-sky-600'/>&nbsp;QUALITY WORKMANSHIP</h3>
                        <p className="text-gray-400 mt-2">We prioritize precision, skill, and dedication in every weld, ensuring the highest level of craftsmanship.</p>
                    </div>
                    <div>
                        <h3 className="flex text-lg text-white font-bold mt-4 text-left"><FaCertificate className='text-lg text-sky-600' />&nbsp;CERTIFICATIONS & COMPLIANCE</h3>
                        <p className="text-gray-400 mt-2">Our services meet industry certifications and safety standards, ensuring reliability and quality.</p>
                    </div>
                    <div>
                        <h3 className="flex text-lg text-white font-bold mt-4 text-left "><FaTags className='text-lg text-sky-600' />&nbsp;AFFORDABLE PRICING</h3>
                        <p className="text-gray-400 mt-2">We strive to provide top-tier welding solutions that are accessible and cost-effective.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeOne