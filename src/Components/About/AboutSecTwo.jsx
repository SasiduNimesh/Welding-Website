import React from 'react'
import AbImg1 from '../../assets/ab1.jpg' 
import AbImg2 from '../../assets/ab2.jpg'

const AboutSecTwo = () => {
  return (
    <section className="bg-black h-auto flex flex-col items-center justify-center p-6 max-md:relative max-md:w-full ">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
           
            <div className="relative flex flex-col items-end">
              <img 
                src={AbImg1}
                alt="Welding" 
                className="w-[50%] h-[300px] rounded-lg object-cover max-md:w-[65%]"
              />
              <img 
                src={AbImg2}
                alt="Welding" 
                className="w-[25%] h-[200px] rounded-lg object-cover absolute top-48 right-70 max-md:right-60 ml-48 max-md:w-[40%]"
              />
              <div className="absolute top-4 left-12">
                <div className="bg-blue-500 h-4 w-24"></div>
                <div className="bg-blue-500 h-24 w-4"></div>
              </div>
              <div className="absolute w-auto bottom-8 right-8 rounded-lg flex p-4 text-justify space-x-4 bg-sky-700">
                <div className="text-center text-black">
                  <p className="text-4xl font-bold">25 +</p>
                  <p className="text-md font-semibold">Year Experience</p>
                </div>
              </div>
            </div>
    
            <div className="flex flex-col justify-center max-md:text-center max-xl:pt-16">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-sm font-bold uppercase">About Us</h3>
                <h2 className='text-white text-2xl font-bold'>Project with Expert & Metal Welding Collaboration</h2>
                <p className="text-gray-400 py-3">
                At Unity Welding Solutions, we combine unmatched expertise with precision to deliver top-quality metal welding and fabrication services. Our team is dedicated to achieving excellence, ensuring every project is handled with meticulous attention to detail and the highest level of professionalism. 
                We pride ourselves on offering innovative solutions tailored to meet the unique needs of each client.
                </p>
                <p className="text-gray-400">
                We believe in fostering strong and lasting connections—both in the exceptional work we produce and the trusted relationships we build with our clients. From mobile welding and custom fabrication to structural projects, our commitment to technical skill and innovative design ensures we consistently exceed expectations. 
                Partner with us to bring your vision to life with craftsmanship and reliability you can count on.
                </p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSecTwo