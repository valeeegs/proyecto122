import React, { useState } from 'react';
import Header from './components/Header';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
/* Import other pages */

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleServiceClick = () => {
    setCurrentPage('services');
  };

  const handleContactClick = () => {
    setCurrentPage('contact');
  };

  const handleAppointmentClick = () => {
    setCurrentPage('appointment');
  };
  /* Define other click handlers for different pages */

  return (
    <div>
      <Header
        handleServiceClick={handleServiceClick}
        handleContactClick={handleContactClick}
        handleAppointmentClick={handleAppointmentClick}
        /* Pass other handlers as props */
      />
      {currentPage === 'services' && <Services />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'appointment' && <Appointment />}
      {/* Render other pages based on currentPage */}
      {/* Add conditional rendering for other pages */}
    </div>
  );
};

export default App;
