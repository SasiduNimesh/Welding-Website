import React from "react";
import Img from "../../assets/Image_welder.png"; 

const HomeForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img src={Img} alt="Workshop" className="w-full h-full object-cover rounded-l-lg"/>
        </div>

        <div className="flex flex-col justify-center gap-4 relative w-full p-6">  
          <p className="text-sm text-gray-500 mb-2 relative left-0">GOT A QUESTION?</p>
          <h2 className="text-3xl font-bold -mt-2">
            REQUEST <span className="text-blue-500">A QUOTE</span>
          </h2>
          <div className="w-15 bg-blue-500 mb-2"></div>
          <form className="relative space-y-6 ">
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                  </div>
                </div>
    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Phone Number"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Subject"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Type Your Message"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  ></textarea>
                </div>
    
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Send Message
                </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
