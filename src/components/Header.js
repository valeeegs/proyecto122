import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../css/Header.css';

const Header = ({ handleServiceClick, handleContactClick, handleAppointmentClick }) => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Health Center Logo"
          />
          {' Health Center'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={handleServiceClick}>Servicios</Nav.Link>
            <Nav.Link onClick={handleContactClick}>Contacto</Nav.Link>
            <Nav.Link onClick={handleAppointmentClick}>Haz una cita</Nav.Link>
            {/* Add other links if needed
            
            <Nav.Link href="#testimonials">Testimonios</Nav.Link>
            <Nav.Link href="#events">Noticias y eventos</Nav.Link>
            <Nav.Link href="#medicalTeam">Equipo médico</Nav.Link>
            <Nav.Link href="#information">Información para pacientes</Nav.Link>
            <Nav.Link href="#about">Acerca de nosotros</Nav.Link>
            <Nav.Link href="#privacy">Política de privacidad</Nav.Link>
            <Nav.Link href="#credits">Créditos</Nav.Link>
            
            */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
