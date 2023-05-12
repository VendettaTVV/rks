import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logorks from '../../pictures/header/logo.svg';
import map_icon from '../../pictures/header/map1.svg';
import ukFlag from '../../pictures/header/language_icons/u_k_flag.ico';
import estFlag from '../../pictures/header/language_icons/estonia_flag.ico';
import ruFlag from '../../pictures/header/language_icons/flag.ico';


function UkHeaderComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
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
                        <Link to="/en" className="nav-link "> Home </Link >
                        <Link to="/services/en" className="nav-link"> Services </Link >
                        <Link to="/works/en" className="nav-link"> Our work </Link >
                        <Link to="/about/en" className="nav-link"> About us </Link >
                        <Link to="/contact/en" className="nav-link"> Contacts </Link >
                    </Nav>
                    <Nav>
                        <Nav.Item className="pt-2">
                            <img
                                src={ukFlag}
                                width="23"
                                height="23"
                                alt="english"
                            />{' '}
                        </Nav.Item>
                        <NavDropdown
                            id="nav-language"
                            title="English"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item className="d-flex">
                                <img
                                    src={estFlag}
                                    width="23"
                                    height="23"
                                    alt="Eesti"
                                />{' '}
                                <Link to="/" className="nav-link pt-0 text-white"> Eesti </Link >
                            </NavDropdown.Item>
                            <NavDropdown.Item className="d-flex">
                                <img
                                    src={ruFlag}
                                    width="23"
                                    height="23"
                                    alt="russian"
                                />{' '}
                                <Link to="/ru" className="nav-link pt-0 text-white"> Русский </Link >
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link target="_blank" href="https://www.google.com/maps/place/RKS+Ltd/@59.3713457,28.1744889,17z/data=!3m1!4b1!4m6!3m5!1s0x469448178ef7e6cb:0xffb466f8bbf8f5a!8m2!3d59.3713457!4d28.1744889!16s%2Fg%2F1v7px3z6?hl=EN">
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

export default UkHeaderComponent;