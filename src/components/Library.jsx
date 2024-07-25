// src/components/Library.jsx
import React from 'react';

function Library() {
  return (
    <div className="bg-white p-4 rounded-lg my-4">
      <h2 className="text-lg">Amity Central Library (OPAC)</h2>
      <div className="mt-2">
        <div><strong>User-id:</strong> 9828928</div>
        <div><strong>Password:</strong> <a href="#">Show</a></div>
        <div className="mt-2">
          <a href="https://example.com" className="text-blue-500 underline">EBSCO Online : Business Journal</a>
          <p>2,300 journals, more than 1,100 peer-reviewed</p>
        </div>
      </div>
      <div className="mt-4">
        <a href="https://example.com" className="bg-blue-500 text-white py-2 px-4 rounded">eLibrary</a>
        <a href="https://example.com" className="bg-blue-500 text-white py-2 px-4 rounded ml-2">AUK Library OPAC</a>
      </div>
    </div>
  );
}

export default Library;
