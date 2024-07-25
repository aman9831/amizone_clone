import React from 'react';
import Attendance from '../components/Attendance';
import FeeStatus from '../components/FeeStatus';
import CareerSection from '../components/CareerSection';
import GuestLectures from '../components/GuestLectures';
import MyClasses from '../components/MyClasses';
import AttendanceDetails from '../components/AttendanceDetails';
import Library from '../components/Library';

const Home = () => {
  return (
    <div>
      <Attendance />
      <FeeStatus />
      <CareerSection />
      <GuestLectures />
      <MyClasses />
      <AttendanceDetails />
      <Library />
    </div>
  );
}

export default Home;
