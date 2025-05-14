import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
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

                </Navbar.Brand>
            </Container>
        </Navbar>
    </>
  )
}

export default CustomNavbar
