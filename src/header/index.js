import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logorks from '../pictures/download.svg';
import map_icon from '../pictures/download1.svg';
import ukFlag from '../pictures/language_icons/u_k_flag.ico';
import estFlag from '../pictures/language_icons/estonia_flag.ico';
import ruFlag from '../pictures/language_icons/flag.ico';


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
                        <Link to="/" className="nav-link "> Home </Link >
                        < NavDropdown
                            id="nav-dropdown-dark"
                            title="Services"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item>
                                
                            <Link to="/services/glass"/>
                            Auto glass replacement 
                            </NavDropdown.Item>
                            <Link to="/services/bodywork" className="dropdown-item"> Bodywork </Link >
                            <Link to="/services/paintwork" className="dropdown-item"> Paintwork </Link >
                            <Link to="/services/towing" className="dropdown-item"> Towing services </Link >
                            <Link to="/services/conditioner" className="dropdown-item"> Air conditioner filling </Link >
                            <Link to="/services/plastic" className="dropdown-item"> Repair of plastic parts </Link >
                            <Link to="/services/custom" className="dropdown-item"> Custom auto parts </Link >
                            <Link to="/services/welding" className="dropdown-item"> Welding </Link >
                            <Link to="/services/restoration" className="dropdown-item"> Restoration of body geometry </Link >
                            <Link to="/services/tyre" className="dropdown-item"> Tyre fitting </Link >

                        </NavDropdown>
                        <Link to="/works" className="nav-link"> Our work </Link >
                        <Link to="/about" className="nav-link"> About us </Link >
                        <Link to="/contact" className="nav-link"> Contacts </Link >
                    </Nav>
                    <Nav>
                        <NavDropdown
                            id="nav-language"
                            title="Languages"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item href="#action/3.1">
                                <img
                                    src={ukFlag}
                                    width="23"
                                    height="23"
                                    className="d-inline-block align-top "
                                    alt="map"
                                />{' '}
                                English
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <img
                                    src={estFlag}
                                    width="23"
                                    height="23"
                                    className="d-inline-block align-top "
                                    alt="map"
                                />{' '}
                                Eesti
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                <img
                                    src={ruFlag}
                                    width="23"
                                    height="23"
                                    className="d-inline-block align-top "
                                    alt="map"
                                />{' '}
                                Русский
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link target='_blank' href="https://www.google.com/maps/place/RKS+Ltd/@59.3713457,28.1744889,17z/data=!3m1!4b1!4m6!3m5!1s0x469448178ef7e6cb:0xffb466f8bbf8f5a!8m2!3d59.3713457!4d28.1744889!16s%2Fg%2F1v7px3z6?hl=EN">
                            <img
                                src={map_icon}
                                width="25"
                                height="25"
                                className="d-inline-block align-top "
                                alt="map"
                            />{' '}
                            Find Us
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>



        </>
    );
}

export default HeaderComponent;