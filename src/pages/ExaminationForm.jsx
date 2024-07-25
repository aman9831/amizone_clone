import React from 'react';
import Footer from '../components/Footer';

const ExaminationForm = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
    <main className="flex-grow">
      <div className="px-4 ml-4">
        <h1 className="text-blue-600 text-3xl pl-4">Examination Form</h1>
      </div>
    </main>
    <Footer />
  </div>
  );
}

export default ExaminationForm;
