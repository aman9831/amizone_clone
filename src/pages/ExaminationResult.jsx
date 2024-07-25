// src/pages/ExaminationResult.jsx
import React from 'react';
import Footer from '../components/Footer';

const ExaminationResult = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        <div className="px-0">
          {/* Page Header */}
          <div className="mb-1 px-3">
            <h1 className="text-blue-600 text-3xl ">Examination </h1>
          </div>
          <div className="text-gray-700 px-3 mb-3">
            <div>1. Name <span className="font-bold">Mr AMAN SHAW</span></div>
            <div>2. Enrollment No. <span className="font-bold">A91404822050</span></div>
          </div>
          <div className="px-3 border-2 border-gray-400 mb-20">
          <div className="bg-gray-100 px-4 py-6">
            <div className="mb-4">
              <label htmlFor="semester" className="block text-gray-700">
                Semester/Year(s) Exam Result:
              </label>
              <select
                id="semester"
                className="mt-1 block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                defaultValue="4"
              >
                <option value="4">4</option>
              </select>
            </div>
          </div>

          {/* Result Table */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-4 mb-6">
            <div className="border-2 border-b-0 border-gray-400 pb-1">
              <dl>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Sno</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">1</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Code</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">BS208</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Title</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">Creativity for Team Excellence</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Max Total</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">100</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">ACU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">3</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Go</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">A-</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">GP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">8</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">CP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">24</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">ECU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">3</dd>
                </div>
                <div className="bg-white px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">PublishDate</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">15/07/2024</dd>
                </div>
              </dl>
            </div>
            <div className="border-2 border-b-0 border-gray-400 pb-1">
              <dl>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Sno</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">2</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Code</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">CSIT202</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Title</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">Computer Oriented Statistical and Optimization Methods</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Max Total</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">100</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">ACU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Go</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">B+</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">GP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">7</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">CP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">31</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">ECU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="bg-white px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">PublishDate</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">15/07/2024</dd>
                </div>
              </dl>
            </div>
            <div className="border-2 border-b-0 border-gray-400 pb-0">
              <dl>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6" >
                  <dt className="text-sm font-medium text-black">Sno</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">3</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6" >
                  <dt className="text-sm font-medium text-black">Course Code</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">CSIT206</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6" >
                  <dt className="text-sm font-medium text-black">Course Title</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">Discrete Mathematics for IT</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6" >
                  <dt className="text-sm font-medium text-black">Max Total</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">100</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6" >
                  <dt className="text-sm font-medium text-black">ACU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6" >
                  <dt className="text-sm font-medium text-black">Go</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">A</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6" >
                  <dt className="text-sm font-medium text-black">GP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">8</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6" >
                  <dt className="text-sm font-medium text-black">CP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">28</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6" >
                  <dt className="text-sm font-medium text-black">ECU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="border-b-0 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6" >
                  <dt className="text-sm font-medium text-black">PublishDate</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">15/07/2024</dd>
                </div>
              </dl>
            </div>
            <div className="border-2 border-b-0 border-gray-400 pb-0">
              <dl>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Sno</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Code</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">CSIT216</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Title</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">Fundamentals of Routing Protocols</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Max Total</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">100</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">ACU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Go</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">A</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">GP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">7</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">CP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">30</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">ECU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">PublishDate</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">15/07/2024</dd>
                </div>
              </dl>
            </div>
            <div className="border-2 border-b-0 border-gray-400 pb-1">
              <dl>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Sno</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">5</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Code</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">CSIT224</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Title</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">IT Project Management</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Max Total</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">100</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">ACU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">3</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Go</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">B+</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">GP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">7</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">CP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">20</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">ECU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">3</dd>
                </div>
                <div className="bg-white px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">PublishDate</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">15/07/2024</dd>
                </div>
              </dl>
            </div>
            <div className="border-2 border-b-0 border-gray-400 pb-1">
              <dl>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Sno</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">6</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Code</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">CSIT232</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Title</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">Python Programming</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Max Total</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">100</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">ACU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Go</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">A+</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">GP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">10</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">CP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">40</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">ECU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="bg-white px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">PublishDate</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">15/07/2024</dd>
                </div>
              </dl>
            </div>
            <div className="border-2 border-b-0 border-gray-400 pb-1">
              <dl>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Sno</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">7</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Code</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">CSIT243</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Title</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">Fundamental of Cloud Computing & Enterprise</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Max Total</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">100</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">ACU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">3</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Go</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">B+</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">GP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">7</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">CP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">21</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">ECU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">3</dd>
                </div>
                <div className="bg-white px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">PublishDate</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">15/07/2024</dd>
                </div>
              </dl>
            </div>
            <div className="border-2  border-gray-400 pb-1">
              <dl>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Sno</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">8</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Code</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">FREN144</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Title</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">French Through Communicative Approach</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Max Total</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">100</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">ACU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">2</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Go</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">B+</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">GP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">7</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">CP</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">14</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">ECU</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">2</dd>
                </div>
                <div className="bg-white px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">PublishDate</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">15/07/2024</dd>
                </div>
              </dl>
            </div>

            <div className="border-2 border-b-0 border-gray-400 pb-1 mt-10">
              <dl>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Semester</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">1</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">SGPA</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">8.81</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">CGPA</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16"></dd>
                </div>
                <div className="border-b-0 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Back Papers</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">0</dd>
                </div>
              </dl>
            </div>
            <div className="border-2 border-b-0 border-gray-400 pb-1 ">
              <dl>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Semester</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">2</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">SGPA</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">8.63</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">CGPA</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">8.72</dd>
                </div>
                <div className="border-b-0 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Back Papers</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">0</dd>
                </div>
              </dl>
            </div>
            <div className="border-2 border-b-0 border-gray-400 pb-1 ">
              <dl>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Semester</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">3</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">SGPA</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">7.93</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">CGPA</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">8.45</dd>
                </div>
                <div className="border-b-0 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Back Papers</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">0</dd>
                </div>
              </dl>
            </div>
            <div className="border-2  border-gray-400 pb-1 ">
              <dl>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Semester</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">SGPA</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">7.99</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">CGPA</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">8.19</dd>
                </div>
                <div className="border-b-0 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6 ">
                  <dt className="text-sm font-medium text-black">Back Papers</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">0</dd>
                </div>
              </dl>
            </div>


            <div className="mt-6 bg-white  border-2 border-gray-300 ">
            <div className="border-b-2  text-sm text-gray-700 mb-1">
              <div className="px-2 pb-2">
              <p>* Mandatory Course. Passing is Mandatory. Credit is not counted for calculation of SGPA.</p>
              <p>- For indicative purpose only.</p>
              <p>No one is responsible for any inadvertent error that may have crept in the results being published on NET. The results published on net are for immediate information to the examinees. These cannot be treated as original mark sheets. Original mark sheets are issued by the University.</p>
              </div>
            </div>
            <div>
              <h2 className="border-b-2 text-lg font-medium text-gray-900 mb-0 pl-4">Abbreviation :</h2>
              
                <div className="border-b-2 border-gray-200 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">AB</dt>
                  <dd className="text-sm text-gray-900">Absent</dd>
                </div>
                <div className="border-b-2 border-gray-200 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">DE/DC</dt>
                  <dd className="text-sm text-gray-900">Debarred</dd>
                </div>
                <div className="border-b-2 border-gray-200 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">UFM</dt>
                  <dd className="text-sm text-gray-900">Unfair Means</dd>
                </div>
                <div className="border-b-2 border-gray-200 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">RL</dt>
                  <dd className="text-sm text-gray-900">Result Later</dd>
                </div>
                <div className="border-b-2 border-gray-200 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">I</dt>
                  <dd className="text-sm text-gray-900">Incomplete</dd>
                </div>
                <div className="border-b-2 border-gray-200"> 
                  <div className="px-4 py-1 grid grid-cols-3 gap-2 mr-24 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">EC</dt>
                  <dd className="text-sm text-gray-900 ml-9">Exam</dd>
                  <dd className="text-sm text-gray-900">Cancelled</dd>
                  </div>
                </div>
                <div className="border-b-2 border-gray-200  ">
                  <div className="px-4 py-1 mr-10 grid grid-cols-3 gap-2 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">IE</dt>
                  <dd className="text-sm text-gray-900 ml-4">Incomplete</dd>
                  <dd className="text-sm text-gray-900">Examination</dd>
                  </div>
                </div>
              
            </div>
            <div className="mt-8">
            <div className="border-b-2 border-t-2 border-gray-200 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Column</dt>
                  <dd className="text-sm text-gray-900">Description</dd>
                </div>
                <div className="border-b-2 border-gray-200 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Sem</dt>
                  <dd className="text-sm text-gray-900">Semester</dd>
                </div>
                <div className="border-b-2 border-gray-200"> 
                  <div className="pl-4 py-1 grid grid-cols-4 gap-2 mr-0 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">CE</dt>
                  <dd className="text-sm text-gray-900 ml-6">Continuous Obtained</dd>
                  <dd className="text-sm text-gray-900 ml-4">Evaluation</dd>
                  <dd className="text-sm text-gray-900">Marks</dd>
                  </div>
                </div>
                <div className="border-b-2 border-gray-200"> 
                  <div className="pl-4 py-1 grid grid-cols-4 gap-2 mr-0 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">MaxCE</dt>
                  <dd className="text-sm text-gray-900 ml-6">Continuous Marks</dd>
                  <dd className="text-sm text-gray-900 ml-4">Evaluation</dd>
                  <dd className="text-sm text-gray-900">Maximum</dd>
                  </div>
                </div>
                <div className="border-b-2 border-gray-200"> 
                  <div className="pl-4 py-1 grid grid-cols-4 gap-2 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">EE</dt>
                  <dd className="text-sm text-gray-900 ml-6">Endterm Obtained</dd>
                  <dd className="text-sm text-gray-900">Examination</dd>
                  <dd className="text-sm text-gray-900">Marks</dd>
                  </div>
                </div>
                <div className="border-b-2 border-gray-200"> 
                  <div className="pl-4 py-1 grid grid-cols-4 gap-2 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">MaxEE</dt>
                  <dd className="text-sm text-gray-900 ml-6">Endterm Marks</dd>
                  <dd className="text-sm text-gray-900">Examination</dd>
                  <dd className="text-sm text-gray-900">Maximum</dd>
                  </div>
                </div>
                <div className="border-b-2 border-gray-200 px-4 py-1 grid grid-cols-4 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Total</dt>
                  <dd className="text-sm text-gray-900 ml-6 col-span-3">Total Marks Obtained</dd>
                </div>
                <div className="border-b-2 border-gray-200 px-4 py-1 grid grid-cols-4 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">MaxTotal</dt>
                  <dd className="text-sm text-gray-900 ml-6 col-span-3">Total Maximum Marks</dd>
                </div>
                <div className="border-b-2 border-gray-200 px-4 py-1 grid grid-cols-4 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">ACU</dt>
                  <dd className="text-sm text-gray-900 ml-6 col-span-3">Associated Credit Units</dd>
                </div>
                <div className="border-b-2 border-gray-200 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">GO</dt>
                  <dd className="text-sm text-gray-900 col-span-2">Grade Obtained</dd>
                </div>
                <div className="border-b-2 border-gray-200 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">GP</dt>
                  <dd className="text-sm text-gray-900 col-span-2">Grade Points</dd>
                </div>
                <div className="border-b-2 border-gray-200 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">CP</dt>
                  <dd className="text-sm text-gray-900">Credit Points</dd>
                </div>
                <div className= "border-b-2 border-gray-200 px-4 py-1 grid grid-cols-4 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">ECU	</dt>
                  <dd className="text-sm text-gray-900 ml-6 col-span-3">Earned Credit Units</dd>
                </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </main>
  <Footer />
</div>
  );
}

export default ExaminationResult;
