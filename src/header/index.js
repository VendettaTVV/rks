import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logorks from '../download.svg';
import map_icon from '../download1.svg';

function HeaderComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className='sticky-top'>
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
                    <Nav>
                    <NavDropdown
                            id="nav-language"
                            title="Languages"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Eesti</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Русский</NavDropdown.Item>
                        </NavDropdown>
            <Nav.Link target='_blank' href="https://www.google.com/maps/place/1.+Paemurru+1,+20205+Narva/@59.3713484,28.171914,17z/data=!3m1!4b1!4m6!3m5!1s0x46944822ade5894d:0xa1b40b986feb5ea6!8m2!3d59.3713457!4d28.1744889!16s%2Fg%2F11c20v0hcy?hl=RU">
            <img
                            src={map_icon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top "
                            alt="map"
                        />{' '}
              Find Us
            </Nav.Link>
          </Nav>
                </Container>
            </Navbar>



        </>
    )
}

export default HeaderComponent;