import React, { useState } from 'react'
import { Container, NavbarCollapse, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

const CustomNavbar = () => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

  return (
    <>
        <Navbar expand="md" style={{ backgroundColor: '#002F6C'}} variant="dark" className="px-3 shadow-sm">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                <img src="/uniesp.jpg" alt="Uniesp Logo" width={60} height={60} className="me-2 rounded"/>
                <span style={{fontSize: '1.25rem'}}>SITE FICTICIO - DISCIPLINA FRONT-END - REACT</span>
                </Navbar.Brand>


                {/* Botao Hamburguer apenas em telas pequenas  */}
                <Navbar.Toggle onClick={handleShow} />
                  <NavbarCollapse className="justify-content-end d-one d-md-flex">
                    <Nav>
                      <Nav.Link as={Link} to="/a-faculdade" className="px-3"> A faculdade </Nav.Link>
                      <Nav.Link as={Link} to="/dpo-lgpd" className="px-3"> DPO LGPD </Nav.Link>
                      <Nav.Link as={Link} to="/noticias" className="px-3"> Notícias </Nav.Link>
                      <Nav.Link as={Link} to="/admin-noticias" className="px-3"> Noticias do adm </Nav.Link>
                    </Nav>
                  </NavbarCollapse>
            </Container>
        </Navbar>
    </>
  )
}

export default CustomNavbar
