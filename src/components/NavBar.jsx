import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    // <Navbar className={scrolled ? "scrolled" : ""} expand="md">
    //   <Container className="">
    //     <Navbar.Brand href="/" className="text-light">
    //       <h1>UĞUR KAYKAF</h1>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto ">
    //         <Nav.Link as={HashLink} to="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Anasayfa</Nav.Link>
    //         <Nav.Link as={HashLink} to="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Yeteneklerim</Nav.Link>
    //         <Nav.Link as={HashLink} to="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projelerim</Nav.Link>
    //         <Nav.Link as={HashLink} to="#certificates" className={activeLink === 'certificates' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('certificates')}>Sertifikalarım</Nav.Link>
    //         <Nav.Link as={HashLink} to="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>İletişim</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="/" className="text-light">
          <h1>Uğur Kaykaf</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-2"/>
        <div >
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Anasayfa</Nav.Link>
              <Nav.Link as={HashLink} to="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Yeteneklerim</Nav.Link>
              <Nav.Link as={HashLink} to="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projelerim</Nav.Link>
              <Nav.Link as={HashLink} to="#certificates" className={activeLink === 'certificates' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('certificates')}>Sertifikalarım</Nav.Link>
              <Nav.Link as={HashLink} to="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>İletişim</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}
