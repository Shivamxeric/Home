import React from 'react';
import img from './rjs.png';
import img1 from './jsp.png';
import img2 from './service.jpg';
import img3 from './typing.jpg';

const Projects = () => {
  const cardData = [
    {
      title: "Portfolio",
      description: "This is my Portfolio. Check it out!",
      imageUrl: img,
      animation: "split",
      button: "Click",
      link: "https://shivamx.vercel.app/", // Add your actual link here
    },
    {
      title: "Services",
      description: "I offer various services. Check them out.",
      imageUrl: img2,
      animation: "slide",
      button: "Click",
      link: "https://your-services-link.com", // Add your actual link here
    },
    {
      title: "Typing",
      description: "Typing practice site.",
      imageUrl: img3,
      animation: "split",
      button: "Click",
      link: "https://xtyping.vercel.app/", // Add your actual link here
    },
    {
      title: "Portfolio",
      description: "Image slides in from the left with text fading in.",
      imageUrl: img1,
      animation: "slide",
      button: "Click",
      link: "https://shivamxprotfolio.vercel.app/", // Add your actual link here
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`group relative w-60 h-80 bg-gradient-to-r from-violet-500 to- rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${card.animation === 'flip' ? 'perspective-[1000px]' : ''}`}
        >
          {/* Front Text (Hover Me) */}
          <div className="absolute inset-0 flex justify-center items-center text-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
            <span className="text-xl font-semibold text-gray-800">Hover Me</span>
          </div>

          {/* Card Animations */}
          <div className={`absolute inset-0 transform ${card.animation === 'split' ? 'group-hover:scale-100 scale-0' : ''} 
                          ${card.animation === 'slide' ? 'group-hover:translate-x-0 translate-x-[150%]' : ''} 
                          transition-all duration-500`}>
            {/* Image (Top 50%) */}
            <div className={`w-full h-1/2 bg-cover bg-center ${card.animation === 'flip' ? 'backface-hidden' : ''}`} 
                 style={{ backgroundImage: `url(${card.imageUrl})` }}></div>

            {/* Paragraph (Bottom 50%) */}
            <div className="w-full h-1/2 bg-white p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{card.description}</p>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <button className="rounded-lg mt-5 bg-blue-600 text-black h-7 font-extrabold w-full hover:bg-blue-400 hover:text-gray-700">
                  {card.button}
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
 
