import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logorksLight from '../../pictures/footer/c-circle-w.svg';

function FooterComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="mt-0 pt-3">
                <Container>
                    <Navbar.Brand className="fs-6">
                        <img
                            src={logorksLight}
                            width="21"
                            height="21"
                            className="d-inline-block align-top"
                            alt="LogoBlack"
                        />{' '}
                        RKS OÜ
                    </Navbar.Brand>
                    <Navbar.Text className="fw-bolder">Aadress: <br /> Paemurru 1<br /> 20205, Narva </Navbar.Text>
                    <Navbar.Text className="fw-bolder">Võta meiega ühendust: <br /> Phone: +372 502 6143<br /> E-mail: info@rksauto.ee </Navbar.Text>
                    <Navbar.Text className="fw-bolder">Oleme avatud: <br /> E-R. 9 - 19 <br /> L. 9 - 12  </Navbar.Text>
                </Container>
            </Navbar>



        </>
    )
}

export default FooterComponent;