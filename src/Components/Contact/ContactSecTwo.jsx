import React from 'react'

const ContactSecTwo = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">GET IN TOUCH</h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
                  />
                </div>
                <div>
                  <label className="block font-semibold">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold">Phone</label>
                <input
                  type="tel"
                  placeholder="Enter Your Phone"
                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
                />
              </div>

              <div>
                <label className="block font-semibold">Subject</label>
                <input
                  type="text"
                  placeholder="Enter Your Subject"
                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
                />
              </div>

              <div>
                <label className="block font-semibold">Message</label>
                <textarea
                  placeholder="Type Your Message"
                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 h-24 resize-none"
                ></textarea>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full">
                SEND A MESSAGE
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-blue-400 uppercase tracking-wide font-bold mb-2">
              Contact With Us
            </h3>
            <h2 className="text-3xl font-bold mb-4">LET'S TALK NOW</h2>
            <p className="text-gray-300 mb-6">
              Reach out to us for all your welding and fabrication needs. We are
              here to provide expert solutions, answer your questions, and
              collaborate on your next project. Let's create something
              exceptional together!
            </p>

            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
            {/* Select the Embed code in the share Location */}
            <iframe
                title="map"
                className="w-full h-full border-0" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.17964213478!2d81.6358302048621!3d7.296313722584352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae519dcbaf5b2f9%3A0x10f4a528a80c3e12!2sAmpara!5e0!3m2!1sen!2slk!4v1742154630643!5m2!1sen!2slk"  
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactSecTwo