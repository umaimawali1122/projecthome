import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-orange-500 p-8 rounded-xl shadow-lg max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Name:</h2>
            <p className="text-lg">Umaima Wali</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Phone:</h2>
            <p className="text-lg">O3041768837</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Email:</h2>
            <p className="text-lg">Umaimawali111@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
