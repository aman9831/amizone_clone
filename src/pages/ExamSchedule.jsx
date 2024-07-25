import React from 'react';
import Footer from '../components/Footer';
const ExamSchedule = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
    <main className="flex-grow">
      <div className="py-2 ml-4">
        <h1 className="text-blue-600 text-3xl pl-1">END SEMESTER</h1>
        <h1 className="text-blue-600 text-3xl pl-1">EXAMINATION</h1>
      </div>
    </main>
    <Footer />
  </div>
  );
}

export default ExamSchedule;
