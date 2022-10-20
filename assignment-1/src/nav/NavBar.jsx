import React from 'react'
import {
  Navbar,

  Nav,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";


import MyImage from '../img/logo.png'

const NavBar = () => {
  return (
    <div>
      {
        <Navbar
          bg="light"
          expand="lg"
          className="d-flex justify-content-between"
        >
          
           
            <img src={MyImage} alt="" />
            <Navbar.Collapse
              id="navbarScroll"
              className="d-flex justify-content-end m-4 "
            >
              <Nav className="d-flex justify-content-end">
                <Nav.Link href="#action1">Homasdase</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>

                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
         
        </Navbar>
      }
    </div>
  );
}

export default NavBar;