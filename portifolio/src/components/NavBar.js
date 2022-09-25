import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

export const NavBar = () => {
    const [activeLink, setActiveLink]
    return(
        <Navbar expand="lg">
        <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="Logo"/>
        </Navbar.Brand>
            
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Link</Nav.Link>
            <Nav.Link href="#projects">Link</Nav.Link>
            <Nav.Link href="#certifications">Link</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#'><img src={} alt=""/></a>
                    <a href='#'><img src={} alt=""/></a>
                    <a href='#'><img src={} alt=""/></a>
                </div>
                <button className='vvd' onclick={
                    () => console.log('connect')}><span>Conectar se</span>
                </button>
            </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}