import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      {/* Google Maps Image and Address Box */}
      <div className="flex flex-col items-center">
        <Image
          className="w-full max-w-md rounded-lg shadow-lg"
          src="/ad.PNG" // Replace with your image source
          alt="Google Maps Address"
          width={600}
          height={400}
        />
        <div className="bg-orange-500 p-4 rounded-xl mt-4">
          <p className="text-lg font-bold text-center text-white">
            16 A/i Abbasia Banglows, Rahim yar Khan near social security hospital
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
