import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import amImage from '../assets/amizone.png';
import aImage from '../assets/pro.png';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [examinationOpen, setExaminationOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleExaminationDropdown = () => {
    setExaminationOpen(!examinationOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [sidebarOpen]);

  return (
    <>
      {/* Fix the header to the top */}
      <div className="bg-yellow-500 px-4 pb-4 pt-1 flex justify-between items-center fixed w-full z-50 top-0 left-0">
        <div className="flex items-center space-x-2 mb-10">
          <button
            className="text-white text-xl border-0 bg-blue-800 px-3 py-1 mr-2 mb-2 rounded-md"
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars"></i>
          </button>
          
            <img
              src={amImage}
              alt="Career"
              className="h-12 mb-2"
            />
          
        </div>
      </div>
      {/* Adjust the top margin to prevent content from being hidden underneath the fixed header */}
      <div className="flex items-center bg-blue-800 h-16 fixed w-full z-50 top-14 left-0">
        <div className="text-white text-lg ml-1">Amity University Kolkata</div>
        <div className="relative ml-20">
          <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span>
          <i className="fas fa-bell text-white"></i>
        </div>
        <div className="relative ml-4">
          <i className="fas fa-envelope text-white"></i>
        </div>
        <img
          src={aImage}
          alt="Profile"
          className="w-10 h-10 rounded-full ml-4"
        />
      </div>
      {/* Adjust the top margin to prevent content from being hidden underneath the fixed header */}
      <div className="mt-32">
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleSidebar}>
            <div
              className="fixed top-0 left-0 w-52 h-full bg-white shadow-md z-50 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="py-1">
                <ul className="mt-4 space-y-2">
                  {[
                    { text: 'Home', icon: 'fas fa-home', path: '/' },
                    { text: 'My Calendar', icon: 'fas fa-calendar-alt' },
                    { text: 'APW', icon: 'fas fa-file-alt' },
                    { text: 'My Courses', icon: 'fas fa-book' },
                    { text: 'Summer Sem', icon: 'fas fa-sun', subItems: [{ text: 'Re-Registration', path: '/re-registration' }, { text: 'Time Table', path: '/time-table' }] },
                    { text: 'My Faculty', icon: 'fas fa-chalkboard-teacher' },
                    { text: 'Examination', icon: 'fas fa-pen', isDropdown: true, subItems: [
                      { text: 'Examination Result', path: '/examination-result' },
                      { text: 'Examination Form', path: '/examination-form' },
                      { text: 'Exam Schedule', path: '/exam-schedule' },
                      { text: 'Apply For Rechecking', path: '/apply-for-rechecking' },
                      { text: 'Reappear Result', path: '/reappear-result' },
                      { text: 'Supp. Exam Form', path: '/supp-exam-form' },
                      { text: 'Back Paper Exam Form', path: '/back-paper-exam-form' },
                      { text: 'Admit Card', path: '/admit-card' },
                      { text: 'Improvement Form', path: '/improvement-form' }
                    ] },
                    { text: 'ATPC Placement', icon: 'fas fa-briefcase', subItems: [
                      { text: 'Student Document', path: '/student-document' },
                      { text: 'Fee Details', path: '/fee-details' },
                      { text: 'IAD', path: '/iad' },
                      { text: 'Gssc Registration', path: '/gssc-registration' }
                    ] },
                    { text: 'The Global Times', icon: 'fas fa-newspaper' },
                    { text: 'NTCC', icon: 'fas fa-graduation-cap' },
                    { text: 'Register for Wifi', icon: 'fas fa-wifi' },
                    { text: 'Conc. Ceremony', icon: 'fas fa-user-graduate' },
                    { text: 'Research Repository', icon: 'fas fa-book-reader' },
                    { text: 'Hostel', icon: 'fas fa-bed' },
                    { text: 'Achievement', icon: 'fas fa-trophy' },
                    { text: 'SAP', icon: 'fas fa-briefcase' },
                    { text: 'Apply For Transcript', icon: 'fas fa-file' },
                    { text: 'CFAS', icon: 'fas fa-certificate' },
                    { text: 'Withdrawal', icon: 'fas fa-times-circle' },
                    { text: 'Logout', icon: 'fas fa-power-off' }
                  ].map((item, index) => (
                    <React.Fragment key={index}>
                      <li className={`flex justify-between items-center border-b border-gray-200 ${item.text === 'Summer Sem' || item.text === 'ATPC Placement' ? 'bg-yellow-400' : ''}`}>
                        <button
                          onClick={item.isDropdown ? toggleExaminationDropdown : closeSidebar}
                          className={`text-gray-700 w-full flex items-center p-2 ${item.text === 'Home' ? 'text-blue-800' : 'text-gray-700'}`}
                        >
                          <i className={`${item.icon} mr-2 ${item.text === 'Home' ? 'text-blue-500' : ''}`}></i>
                          {item.text}
                          {item.isDropdown && (
                            <i className={`ml-auto fas ${examinationOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                          )}
                        </button>
                      </li>
                      {item.isDropdown && examinationOpen && item.subItems && (
                        <ul className="pl-6 space-y-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex} className="flex justify-between items-center border-b border-gray-200">
                              <Link
                                to={subItem.path || '#'}
                                className="text-gray-700 w-full flex items-center p-2"
                                onClick={closeSidebar}
                              >
                                {subItem.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.subItems && !item.isDropdown && (
                        <ul className="pl-8 space-y-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex} className="flex justify-between items-center border-b border-gray-200">
                              <Link
                                to={subItem.path || '#'}
                                className="text-gray-700 w-full flex items-center p-2"
                                onClick={closeSidebar}
                              >
                                {subItem.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
