// src/components/Attendance.jsx
import React from 'react';

function Attendance() {
  return (
    <div className="p-4 rounded-lg mb-4 mt-2" style={{ backgroundColor: '#4addc0' }}>
      <h2 className="text-lg text-white">Attendance</h2>
      <div className="flex items-center justify-center">
      <div className="w-28 h-28 border-[12px] rounded-full p-3 flex items-center justify-center"  style={{ borderColor: '#099a17' }}>
        <div className="text-2xl text-white">8</div>
      </div>
      </div>
      <div className="text-center mt-2">Above 85%</div>
    </div>
  );
}

export default Attendance;
