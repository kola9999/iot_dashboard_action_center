import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import abraham from "./img/abraham.png";
import kola from "./img/kola.jpg";
import { Navbar, Nav, Form } from "react-bootstrap";
export default function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <strong>IOT dashboad</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="mt-2 ml-6" style={{ color: "#fff" }} href="/">
              <b>Faculty:</b>
            </Nav.Link>
            <Nav.Link className="mt-2" style={{ color: "#fff" }} href="/">
              Prof.Abraham Sampson
            </Nav.Link>
            <Form inline className="mr-sm-2">
              <div className="avatar">
                <img className="avatarimg" alt="faculty" src={abraham} />
              </div>
            </Form>
            <Nav.Link className="mt-2" style={{ color: "#fff" }} href="/">
              <b>Lead developer:</b>
            </Nav.Link>
            <Nav.Link className="mt-2" style={{ color: "#fff" }} href="/">
              Kola Reddy Nagendra
            </Nav.Link>
            <Form inline className="mr-sm-4">
              <div className="avatar">
                <img className="avatarimg" alt="student" src={kola} />
              </div>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
