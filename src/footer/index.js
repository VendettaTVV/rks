import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logorksBlack from '../c-circle-w.svg';

function FooterComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className='mt-0 pt-3'>
                <Container>
                    <Navbar.Brand  className='fs-6'>
                        <img
                            src={logorksBlack}
                            width="21"
                            height="21"
                            className="d-inline-block align-top"
                            alt="LogoBlack"
                        />{' '}
                        RKS OÜ
                    </Navbar.Brand>
                        <Navbar.Text className="fw-bolder">Address: <br /> Paemurru 1<br /> 20205, Narva </Navbar.Text>
                        <Navbar.Text className="fw-bolder">Contact: <br /> Phone: +372 502 6143<br /> E-mail: info@rksauto.ee </Navbar.Text>
                        <Navbar.Text className="fw-bolder">We are open: <br /> M-F. 9 - 19 <br /> Sat - Sun. Day off  </Navbar.Text>
                </Container>
            </Navbar>



        </>
    )
}

export default FooterComponent;