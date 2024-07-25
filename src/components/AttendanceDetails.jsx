// src/components/AttendanceDetails.jsx
import React from 'react';

function AttendanceDetails() {
  return (
    <div className="bg-white p-4 rounded-lg my-4">
      <h2 className="text-lg">My Attendance</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-blue-700">CSIT216: Fundamentals of Routing Protocols</h3>
          <div className="flex justify-between items-center">
            <span>49/52</span>
            <span className="text-green-600">94.23%</span>
          </div>
        </div>
        <div>
          <h3 className="text-blue-700">CSIT224: IT Project Management</h3>
          <div className="flex justify-between items-center">
            <span>27/27</span>
            <span className="text-green-600">100.00%</span>
          </div>
        </div>
        <div>
          <h3 className="text-blue-700">CSIT232: Python Programming</h3>
          <div className="flex justify-between items-center">
            <span>52/54</span>
            <span className="text-green-600">96.30%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceDetails;
