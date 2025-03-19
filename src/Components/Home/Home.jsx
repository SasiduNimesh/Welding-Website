
// Import Your Images
import Image1 from "../../assets/homeImg1.jpg";
import Image2 from "../../assets/homeImg2.jpg";
import Image3 from "../../assets/homeImg3.jpg";
import Image4 from "../../assets/homeImg4.jpg";

import { useState , useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "MOBILE WELDING",
    subtitle: "& REPAIRS",
    description: "PRECISION ON THE GO.",
    image: Image1,
  },
  {
    id: 2,
    title: "FABRICATION WELDING",
    subtitle: "& DESIGN",
    description: "TAILORED TO PERFECTION.",
    image: Image2,
  },
  {
    id: 3,
    title: "STRUCTURAL WELDING",
    subtitle: "& REINFORCEMENT",
    description: "BUILT FOR STRENGTH.",
    image: Image3,
  },
  {
    id: 4,
    title: "STRUCTURAL WELDING",
    subtitle: "& REINFORCEMENT",
    description: "BUILT FOR STRENGTH.",
    image: Image4,
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="flex flex-col z-5">
        <div className="relative h-screen w-full flex">
            {/* Image Slides btn */}
            <div className="absolute max-md:bottom-4 max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-auto max-md:flex-row left-6 top-1/3 transform -translate-y-1/2 flex flex-col gap-3 z-20">
                {slides.map((slide, index) => (
                <button
                    key={slide.id}
                    className={`w-2 h-5 max-md:w-3 max-md:h-3 rounded-full border-2 transition-all duration-300 ${
                    activeIndex === index ? "bg-white border-white" : "bg-transparent border-gray-400"
                    }`}
                    onClick={() => setActiveIndex(index)}
                ></button>
                ))}
            </div>
            
            <div className="relative h-screen w-full overflow-hidden">
                {slides.map((slide, index) => (
                <motion.div
                    key={slide.id}
                    className="absolute inset-0 h-full w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-opacity-40"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 lg:px-16 z-10">
                    <h1 className="text-7xl md:text-9xl font-extrabold tracking-wider opacity-10">
                        {slide.title.split(" ")[0]}
                    </h1>
                    <div className="text-5xl md:text-7xl font-bold">
                        <span>{slide.title} </span>
                        <span className="text-sky-800">{slide.subtitle}</span>
                    </div>
                    <p className="mt-4 text-lg md:text-2xl tracking-wide">{slide.description}</p>
                    <a
                        className="w-50 mt-6 inline-block bg-white text-blue-900 font-bold px-4 py-2 rounded hover:bg-gray-200 transition"
                        href="/contact"
                    >
                        CONTACT US
                    </a>
                    <div className="absolute bottom-30 w-full flex justify-center">
                        <FaArrowDown className="text-2xl text-blue-600 font-bold animate-bounce " />
                    </div>
                    </div>
                </motion.div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Home;

