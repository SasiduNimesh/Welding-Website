import React from 'react'
import homeProImg from "../../assets/homeImg3.jpg";

const HomeProgress = () => {
  return (
    <section className="bg-black text-white py-16 flex justify-center items-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative px-6 lg:px-16">
        
        <div className="relative w-full">
          <img 
            src={homeProImg} 
            alt="Welding Process" 
            className="w-full h-auto object-cover rounded-md"
          />
          
          <div className="absolute bottom-0 left-0 w-full bg-yellow-500/40 md:p-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold">01</h3>
                <h4 className="text-sm font-bold uppercase">Consultation</h4>
                <p className="text-xs text-gray-300">
                  We begin with a detailed consultation to understand your specific requirements and project goals.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">02</h3>
                <h4 className="text-sm font-bold uppercase">Planning</h4>
                <p className="text-xs text-gray-300">
                  Our team devises a tailored plan, focusing on precision and efficient execution.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">03</h3>
                <h4 className="text-sm font-bold uppercase">Execution</h4>
                <p className="text-xs text-gray-300">
                  The project is completed with craftsmanship, ensuring high-quality results.
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-left lg:pr-12 justify items-center">
          <h3 className="text-blue-500 text-sm font-bold uppercase text-center">Our Process</h3>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-center">
            The Best Process Experience
          </h2>
          <p className="text-gray-400 text-center">
            We take immense pride in offering a streamlined and efficient process tailored to meet all 
            your welding needs. From planning to execution, our team prioritizes precision and craftsmanship 
            in every phase of the process. We are committed to delivering results that exceed your expectations. 
            With attention to detail and a focus on quality, we ensure that each project is handled with expertise 
            and care, leaving you with a finished product that stands the test of time.
          </p>
          <a 
            href="/contact" 
            className="bg-blue-500 text-white font-bold px-6 py-3 rounded-md hover:bg-red-700 transition w-fit"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  )
}

export default HomeProgress