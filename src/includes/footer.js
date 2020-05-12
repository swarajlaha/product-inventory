import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import '../css/footer.css'

const Footer = () => {
    return(
        <footer className="footer">
            <Navbar expand="lg" variant="dark" bg="dark" className="mt-5 mb-0">
                <Container>
                    <Navbar.Brand href="#">React JS Capstone Project made by <a href="https://github.com/swarajlaha">Swaraj Laha</a></Navbar.Brand>
                </Container>
            </Navbar>
        </footer>
    )
}

export default Footer