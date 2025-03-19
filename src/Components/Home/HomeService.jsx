import React from 'react'

const services = [
    { id: "01", title: "Mobile Welding Repairs", description: "High-quality welding services brought directly to your location for convenient and precise repairs." },
    { id: "02", title: "Custom Fabrication", description: "Tailored metalwork designed and crafted to meet your specific needs with top-notch craftsmanship." },
    { id: "03", title: "Structural Welding", description: "Strong, secure, and reliable welds for residential, commercial, and industrial structural components." },
    { id: "04", title: "Ornamental Welding", description: "Combining artistry with durability to create decorative gates, railings, fences, and metalwork." },
    { id: "05", title: "Equipment & Machinery Modifications", description: "Expert adjustments to improve performance and efficiency of your tools and machinery." },
    { id: "06", title: "Emergency Welding Services", description: "Reliable solutions when time is critical, restoring functionality to prevent prolonged downtime." },
    { id: "07", title: "On-Site Welding Services", description: "Professional-grade equipment and skilled welders brought to your location to maximize efficiency." },
];

const HomeService = () => {
  return (
    <section className="h-screen flex items-center justify-center p-6 text-white bg-transparent max-xl:h-full">
      <div className="w-[94%] mx-auto text-center justify-center">
          <h3 className="relative bottom-4 text-blue-400 text-lg uppercase font-bold mb-6">Our Services</h3>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-wider uppercase mb-10">Unity Welding Solutions</h2>

          <div className="relative top-6 justify-center m-2 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-xl:gap-2 items-center">
            {services.map((service) => (
              <div key={service.id} className="relative overflow-hidden flex flex-col bg-black rounded-lg">
                <h3 className="text-blue-400 text-lg font-bold uppercase mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <div className="absolute -top-4 -left-4 text-7xl font-extrabold text-gray-700 opacity-60">{service.id}</div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default HomeService