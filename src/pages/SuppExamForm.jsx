import React from 'react';
import Footer from '../components/Footer';

const SuppExamForm = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
    <main className="flex-grow">
      <div className="px-4 ml-4">
        <h1 className="text-black text-3xl pl-4">Supplementary Exam</h1>
        <h1 className="text-black text-3xl pl-2">Form is not available /</h1>
        <h1 className="text-black text-3xl pl-4">Result Not Declared.</h1>
      </div>
    </main>
    <Footer />
  </div>
  );
}

export default SuppExamForm;
