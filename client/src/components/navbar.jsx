import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="#home">Magness Consulting LLC</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About Dr. Magness</Nav.Link>
                    <Nav.Link href="#mission">Our Mission</Nav.Link>
                    <NavDropdown title="Services" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#leadershipcoaching">Leadership Coaching</NavDropdown.Item>
                    <NavDropdown.Item href="#teamdev">Team Development</NavDropdown.Item>
                    <NavDropdown.Item href="#processimp">Process Improvement/Problem Solving</NavDropdown.Item>
                    <NavDropdown.Item href="#orgdev">Organizational Development</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                    {/* <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                    </Nav.Link> */}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;
