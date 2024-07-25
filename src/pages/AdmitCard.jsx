import React from 'react';
import Footer from '../components/Footer';
const AdmitCard = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        <div className="px-1 ml-4">
          <h1 className="text-blue-400 text-3xl pl-2">Examination Admit Card</h1>
          <h1 className="text-blue-400 text-3xl pl-16">Not Available</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AdmitCard;
