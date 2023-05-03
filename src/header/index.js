import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logorks from '../download.svg';

function HeaderComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img
                            src={logorks}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />{' '}
                        RKS
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Our works</Nav.Link>
                        <Nav.Link href="#pricing">About us</Nav.Link>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Services"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item href="#action/3.1">Auto glass replacement</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Bodywork</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Paintwork</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Towing services</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Air conditioner filling</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Repair of plastic parts</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Custom auto parts</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Welding</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Restoration of body geometry</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Tyre fitting</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>



        </>
    )
}

export default HeaderComponent;