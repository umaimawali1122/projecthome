import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="bg-house-pattern min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-black text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Brand Name */}
          <a href="#" className="text-xl font-bold">My Home Page</a>
          
          {/* Navigation Links */}
          <div className="space-x-6">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Address</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-8">
        <figure className="md:flex bg-orange-500 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <Image
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="/home.jpg"
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-white">
                The most peaceful place in the world is your home. A house is made of bricks and beams; a home is made of hopes and dreams. Home is not a place; it's a feeling of comfort, belonging, and endless warmth.
              </p>
            </blockquote>
            <figcaption className="font-large">
              <div className="text-white">
                Abbasia Banglows 16 A/i Rahim Yar Khan
              </div>
              <div className="text-white">
                Umaima Wali ,UIUX designer
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Page;




