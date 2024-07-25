import React from 'react';
import Footer from '../components/Footer';
const ApplyForRechecking = () => {
  const tickIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-green-500 inline-block"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
  return (
    <div className="min-h-screen flex flex-col justify-between">
    <main className="flex-grow">
      <div className="px-1 ml-2">
        <h1 className="text-blue-600 text-3xl">Rechecking Application</h1>
        <h1 className="text-blue-600 text-3xl mb-8">Form</h1>
        <div className="text-gray-700 space-y-2 border-b-2 border-gray-200 pb-8 mb-12">
          <div> {tickIcon} Institution: <span className="font-semibold"><b>Amity Institute of Information Technology, Kolkata</b></span></div>
          <div> {tickIcon} Programme Code: <span className="font-semibold"><b>Programme Title BCA</b></span></div>
          <div> {tickIcon} Name: <span className="font-semibold"><b>Mr AMAN SHAW</b></span></div>
          <div> {tickIcon} Father's Name: <span className="font-semibold"><b>AMARJEET KUMAR SHAW</b></span></div>
          <div> {tickIcon} Enrollment No.: <span className="font-semibold"><b>A91404822050</b></span></div>
          <div> {tickIcon} Year Of Admission: <span className="font-semibold"><b>2022 Batch 2022-2025</b></span></div>
        </div>
      </div>

      <div className="border-b-2 border-gray-400 bg-white shadow overflow-hidden sm:rounded-lg mt-4 mb-10">
            <div className="border-2 border-b-0 border-gray-400 pb-1">
              <dl>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Sno</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">1</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Sem</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Code</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">CSIT202</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course name</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">Computer Oriented Statistical and Optimization Methods</dd>
                </div>
                <div className="border-b-2 border-gray-100 ">
                  <div className="px-4 py-1 mr-20 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black col-span-2">Grade Obtained</dt>
                  <dd className="text-sm text-gray-900">B+</dd>
                  </div>
                </div>
                <div className="px-4 py-1 grid grid-cols-3 gap-4 mr-20 sm:px-6">
                  <dt className="text-sm font-medium text-black col-span-2">Status of Application</dt>
                  <dd className="text-sm text-green-600 col-span-1">Applied & Paid</dd>
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
                  <dt className="text-sm font-medium text-black">Sem</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Code</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">CSIT206</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course name</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">Discrete Mathematics for IT</dd>
                </div>
                <div className="border-b-2 border-gray-100 ">
                  <div className="px-4 py-1 mr-20 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black col-span-2">Grade Obtained</dt>
                  <dd className="text-sm text-gray-900">A</dd>
                  </div>
                </div>
                <div className="px-4 py-1 grid grid-cols-3 gap-4 mr-20 sm:px-6">
                  <dt className="text-sm font-medium text-black col-span-2">Status of Application</dt>
                  <dd className="text-sm text-green-600 col-span-1">Applied & Paid</dd>
                </div>
              </dl>
            </div>

            <div className="border-2 border-b-0 border-gray-400 pb-1">
              <dl>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Sno</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">3</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Sem</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Code</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">CSIT216</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course name</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">Fundamentals of Routing Protocols</dd>
                </div>
                <div className="border-b-2 border-gray-100 ">
                  <div className="px-4 py-1 mr-20 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black col-span-2">Grade Obtained</dt>
                  <dd className="text-sm text-gray-900">A</dd>
                  </div>
                </div>
                <div className="px-4 py-1 grid grid-cols-3 gap-4 mr-20 sm:px-6">
                  <dt className="text-sm font-medium text-black col-span-2">Status of Application</dt>
                  <dd className="text-sm text-green-600 col-span-1">Applied & Paid</dd>
                </div>
              </dl>
            </div>

            <div className="border-2 border-b-0 border-gray-400 pb-1">
              <dl>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Sno</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Sem</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Code</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">CSIT224</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course name</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">IT Project Management</dd>
                </div>
                <div className="border-b-2 border-gray-100 ">
                  <div className="px-4 py-1 mr-20 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black col-span-2">Grade Obtained</dt>
                  <dd className="text-sm text-gray-900">B+</dd>
                  </div>
                </div>
                <div className="px-4 py-1 grid grid-cols-3 gap-4 mr-20 sm:px-6">
                  <dt className="text-sm font-medium text-black col-span-2">Status of Application</dt>
                  <dd className="text-sm text-green-600 col-span-1">Applied & Paid</dd>
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
                  <dt className="text-sm font-medium text-black">Sem</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Code</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">CSIT232</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course name</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">Python Programming</dd>
                </div>
                <div className="border-b-2 border-gray-100 ">
                  <div className="px-4 py-1 mr-20 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black col-span-2">Grade Obtained</dt>
                  <dd className="text-sm text-gray-900">A+</dd>
                  </div>
                </div>
                <div className="px-4 py-1 grid grid-cols-3 gap-4 mr-20 sm:px-6">
                  <dt className="text-sm font-medium text-black col-span-2">Status of Application</dt>
                  <dd className="text-sm text-black col-span-1">Click to Apply</dd>
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
                  <dt className="text-sm font-medium text-black">Sem</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">4</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course Code</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">CSIT243</dd>
                </div>
                <div className="border-b-2 border-gray-100 px-4 py-1 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black">Course name</dt>
                  <dd className="text-sm text-gray-900 sm:mt-0 col-span-2 pl-16">Fundamental of Cloud Computing & Enterprise</dd>
                </div>
                <div className="border-b-2 border-gray-100 ">
                  <div className="px-4 py-1 mr-20 grid grid-cols-3 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black col-span-2">Grade Obtained</dt>
                  <dd className="text-sm text-gray-900">B+</dd>
                  </div>
                </div>
                <div className="px-4 py-1 grid grid-cols-3 gap-4 mr-20 sm:px-6">
                  <dt className="text-sm font-medium text-black col-span-2">Status of Application</dt>
                  <dd className="text-sm text-black col-span-1">Click to Apply</dd>
                </div>
              </dl>
            </div>
      </div>      

      <div className="bg-gray mt-2 p-4  mb-20">
        <div className="text-gray-700">
          <div className="font-semibold text-3xl">Note:</div>
          <p className="mt-2">
            1. As per Regulations of the University, answer book of a student in any examination shall not be reassessed under any circumstances.
          </p>
          <p className="mt-2">
            2. However, after the publication of the results of the University examinations, if a student, whether passed or failed, has strong grounds and belief that some mistake has been made in connection with his results, he/she may apply for re-checking of his/her answer book in one or more courses as the case may be within 02 weeks of the date of declaration of results.
          </p>
          <p className="mt-2">
            3. <b>Fee for rechecking @Rs. 500/- per course is applicable and it is non-refundable.</b>
          </p>
        </div>
      </div>


    </main>
    <Footer />
  </div>
  );
}

export default ApplyForRechecking;
