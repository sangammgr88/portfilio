import React, { useState } from 'react';
import { CgWebsite } from "react-icons/cg";
import { FaCircleChevronRight } from "react-icons/fa6";
import { MdOutlineAppShortcut } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";

const Service = () => {
  // State to handle which service is being viewed
  const [selectedService, setSelectedService] = useState(null);

  // Data for services
  const services = [
    {
      id: 1,
      icon: <CgWebsite className='text-4xl mb-2' />,
      title: 'Web Designer',
      description: 'I create responsive and modern websites using the latest technologies.',
    },
    {
      id: 2,
      icon: <LuImagePlus className='text-4xl mb-2' />,
      title: 'UI/UX Designer',
      description: 'I design user interfaces that are user-friendly and visually appealing.',
    },
    {
      id: 3,
      icon: <MdOutlineAppShortcut className='text-4xl mb-2' />,
      title: 'App Designer',
      description: 'I design and develop mobile applications with a focus on user experience.',
    }
  ];

  // Close the popup
  const closePopup = () => {
    setSelectedService(null);
  };

  return (
    <div className='p-6 md:p-12'>
      <div className='text-center'>
        <h1 className='font-popins text-3xl'>Services</h1>
        <p className='mt-2'>What I Offer</p>
      </div>
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 mt-10'>
        {services.map((service) => (
          <div
            key={service.id}
            className='border-4 bg-slate-300 rounded-2xl h-52 w-48 duration-1000 grid justify-center items-center hover:h-56 hover:w-52 hover:duration-1000 hover:cursor-pointer'
            onClick={() => setSelectedService(service)}
          >
            <div className='text-center'>
              {service.icon}
              <h1 className='font-bold text-2xl'>{service.title}</h1>
              <p className="flex justify-center items-center font-thin mt-2">
                View More
                <FaCircleChevronRight className="ml-2" />
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg mx-4">
            <h2 className="text-3xl font-bold mb-4">{selectedService.title}</h2>
            <p className="mb-6">{selectedService.description}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;