import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
export default function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <strong>IOT Fundamentals Project DashBoard</strong>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="">About Us</Nav.Link>
            <Nav.Link href="/">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
}
