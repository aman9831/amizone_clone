import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Attendance from './components/Attendance';
import FeeStatus from './components/FeeStatus';
import CareerSection from './components/CareerSection';
import GuestLectures from './components/GuestLectures';
import MyClasses from './components/MyClasses';
import AttendanceDetails from './components/AttendanceDetails';
import Library from './components/Library';
import ExaminationResult from './pages/ExaminationResult';
import ExaminationForm from './pages/ExaminationForm';
import ExamSchedule from './pages/ExamSchedule';
import ApplyForRechecking from './pages/ApplyForRechecking';
import ReappearResult from './pages/ReappearResult';
import SuppExamForm from './pages/SuppExamForm';
import BackPaperExamForm from './pages/BackPaperExamForm';
import AdmitCard from './pages/AdmitCard';
import ImprovementForm from './pages/ImprovementForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="px-4 pb-4 pt-2">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/feestatus" element={<FeeStatus />} />
            <Route path="/career" element={<CareerSection />} />
            <Route path="/guestlectures" element={<GuestLectures />} />
            <Route path="/myclasses" element={<MyClasses />} />
            <Route path="/attendancedetails" element={<AttendanceDetails />} />
            <Route path="/library" element={<Library />} />
            <Route path="/examination-result" element={<ExaminationResult />} />
            <Route path="/examination-form" element={<ExaminationForm />} />
            <Route path="/exam-schedule" element={<ExamSchedule />} />
            <Route path="/apply-for-rechecking" element={<ApplyForRechecking />} />
            <Route path="/reappear-result" element={<ReappearResult />} />
            <Route path="/supp-exam-form" element={<SuppExamForm />} />
            <Route path="/back-paper-exam-form" element={<BackPaperExamForm />} />
            <Route path="/admit-card" element={<AdmitCard />} />
            <Route path="/improvement-form" element={<ImprovementForm />} />
            {/* Add routes for other pages */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
