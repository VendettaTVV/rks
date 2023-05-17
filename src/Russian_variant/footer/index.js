import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logorksLight from '../../pictures/footer/c-circle-w.svg';
import '../../Styles/footerStyle.scss';

function RuFooterComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="mt-0 pt-3">
                <Container id="footer_ru">
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
                    <Navbar.Text className="fw-bolder">Адрес: <br /> Paemurru 1<br /> 20205, Narva </Navbar.Text>
                    <Navbar.Text className="fw-bolder">Контакты: <br /> Телефон: +372 502 6143<br /> Э-почта: info@rksauto.ee </Navbar.Text>
                    <Navbar.Text className="fw-bolder footer_dis_ru">Мы открыты: <br /> Пн-Пт. 9 - 19 <br /> Суб. 9 - 12 </Navbar.Text>
                </Container>
            </Navbar>



        </>
    )
}

export default RuFooterComponent;