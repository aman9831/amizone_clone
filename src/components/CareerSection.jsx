// src/components/CareerSection.jsx
import React from 'react';
import amiImage from '../assets/ami.jpeg';
function CareerSection() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg my-4">
      <img
        src={amiImage}
        alt="Career"
        className="rounded-lg"
      />
    </div>
  );
}

export default CareerSection;
