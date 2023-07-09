import React from "react";
import Home from "./pages/Home";
import Footrs from "./componats/Footer/Footrs";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Contact from "./pages/Contact";
import AboyrPage from "./pages/AboyrPage";
import OurTeam from "./pages/OurTeam";
import ServiesPage from "./pages/ServiesPage";
import BlogPade from "./pages/BlogPade";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './componats/Nav/Header.css';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar expand="lg" className="fixed-top headerN">
        <Container>
          <Navbar.Brand href="#">
            <img src="/imgs/logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto">
              <Link to="/" className="nav-link active">
                Home
              </Link>
              <Link to="/AboyrPage" className="nav-link">
                About Us
              </Link>
              <Link to="/OurTeam" className="nav-link">
                Our Team
              </Link>
              <Link to="/ServiesPage" className="nav-link">
                Service
              </Link>
              <Link to="/BlogPade" className="nav-link">
                Blog
              </Link>
              <Link to="/Contact" className="nav-link">
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Link to="/Contact" className="Link">
            <button className="btnnav">
              CONTACT US
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </button>
          </Link>
        </Container>
      </Navbar>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboyrPage" element={<AboyrPage />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/ServiesPage" element={<ServiesPage />} />
        <Route path="/BlogPade" element={<BlogPade />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
