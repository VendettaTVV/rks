import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import addressIcon from '../address_icon.png';
import timeIcon from '../time_icon.png';
import mailIcon from '../mail_icon.png';
import phoneIcon from '../phone_icon.png';


function ContactComponent() {
    return (
        <>
            <p className="text-center fw-bolder mb-0 pt-5 fs-1 font-family-sans-serif bg-white container">Contacts</p>
            <hr className="mx-auto w-50 mb-5 mt-5" />
            <Container className=' d-flex justify-content-around flex-wrap mt-5'>
                <Container className="w-50 ms-0">
                    <ListGroup variant="flush" className=" m-0 ">
                        <ListGroup.Item className=" mb-3 mt-5">
                            <img
                                src={addressIcon}
                                width="40"
                                height="40"
                                className="d-inline-block "
                                alt="address"
                            />{' '}
                            Paemurru 1, 20205, Narva
                        </ListGroup.Item>
                        <ListGroup.Item className=" mb-3 mt-3">
                            <img
                                src={timeIcon}
                                width="40"
                                height="40"
                                className="d-inline-block "
                                alt="address"
                            />{' '}
                            M-F. 9 - 19 Sat. 9 - 12 Sun. Day off
                        </ListGroup.Item>
                        <ListGroup.Item className=" mb-3 mt-3">
                        <img
                                    src={mailIcon}
                                    width="40"
                                    height="40"
                                    className="d-inline-block "
                                    alt="address"
                                />{' '}
                            info@rksauto.ee
                            </ListGroup.Item>
                        <ListGroup.Item className=" mb-5 mt-3">
                        <img
                                    src={phoneIcon}
                                    width="40"
                                    height="40"
                                    className="d-inline-block "
                                    alt="address"
                                />{' '}
                            Райво — член правления, +372 50 26 143
                            Николай — мастер кузовных работ, +372 52 19 339, Связаться
                            Антон — мастер кузовных работ, +372 53 45 05 39, Связаться
                            Максим — комплектовщик, установка стекол, +372 55 15 384, Связаться
                            </ListGroup.Item>
                        
                    </ListGroup>

                </Container>
                <Container className="w-50 me-0 mb-5 mt-5">
                    <Form className=" ms-0">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Your name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="outline-secondary" type="submit" className="w-100">
                            Send a message
                        </Button>
                    </Form>
                </Container>



            </Container>
        </>
    )
}

export default ContactComponent;