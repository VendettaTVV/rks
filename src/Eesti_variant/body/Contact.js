import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import { useForm } from 'react-hook-form';
import addressIcon from '../../pictures/contacts/address_icon.png';
import timeIcon from '../../pictures/contacts/time_icon.png';
import mailIcon from '../../pictures/contacts/mail_icon.png';
import phoneIcon from '../../pictures/contacts/phone_icon.png';
import phoneCallIcon from '../../pictures/contacts/phone-call.svg';


function ContactComponent() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (values) => alert(JSON.stringify(values, null, 2));

    return (
        <>
            <p className="text-center fw-bolder mb-0 pt-5 fs-1 font-family-sans-serif bg-white container">Kontaktid</p>
            <hr className="mx-auto w-50 mb-5 mt-5" />
            <Container className=" d-flex justify-content-around flex-wrap mt-5">
                <Container className="w-50 ms-0">
                    <ListGroup variant="flush" className=" m-0 ">
                        <ListGroup.Item className=" mb-3 mt-5 ">
                            <img
                                src={addressIcon}
                                width="40"
                                height="40"
                                className="d-inline-block me-3 "
                                alt="address"
                            />{" "}
                            Paemurru 1, 20205, Narva
                        </ListGroup.Item>
                        <ListGroup.Item className=" mb-3 mt-3">
                            <img
                                src={timeIcon}
                                width="40"
                                height="40"
                                className="d-inline-block me-3"
                                alt="time"
                            />{" "}
                            E-R: 9 - 19.  L: 9 - 12
                        </ListGroup.Item>
                        <ListGroup.Item className=" mb-3 mt-3">
                            <img
                                src={mailIcon}
                                width="40"
                                height="40"
                                className="d-inline-block me-3"
                                alt="mail"
                            />{" "}
                            info@rksauto.ee
                        </ListGroup.Item>
                        <ListGroup.Item className=" mb-3 mt-3">
                            <img
                                src={phoneIcon}
                                width="40"
                                height="40"
                                className="d-inline-block me-2"
                                alt="phone"
                            />{" "}
                            Juhatuse liige — Raivo   +372 50 26 143
                            <Badge type="button" bg="light" text="dark" className="ms-3" >
                                <a href="tel: +372 50 26 143" className="text-decoration-none link-dark">
                                    <img
                                        src={phoneCallIcon}
                                        width="15"
                                        height="15"
                                        className="d-inline-block "
                                        alt="callMe"
                                    />{" "}
                                    Helista mulle
                                </a>
                            </Badge>{" "}
                        </ListGroup.Item>
                        <ListGroup.Item className=" mb-3 mt-3">
                            <img
                                src={phoneIcon}
                                width="40"
                                height="40"
                                className="d-inline-block me-2"
                                alt="phone"
                            />{" "}
                            Keretööde meister — Nikolai +372 52 19 339
                            <Badge type="button" bg="light" text="dark" className="ms-3" >
                                <a href="tel: +372 52 19 339" className="text-decoration-none link-dark">
                                    <img
                                        src={phoneCallIcon}
                                        width="15"
                                        height="15"
                                        className="d-inline-block "
                                        alt="callMe"
                                    />{" "}
                                    Helista mulle
                                </a>
                            </Badge>{" "}
                        </ListGroup.Item>
                        <ListGroup.Item className=" mb-4 mt-3">
                            <img
                                src={phoneIcon}
                                width="40"
                                height="40"
                                className="d-inline-block me-2"
                                alt="phone"
                            />{" "}
                            Keretööde meister — Anton +372 53 45 05 39
                            <Badge type="button" bg="light" text="dark" className="ms-3" >
                                <a href="tel: +372 53 45 05 39" className="text-decoration-none link-dark">
                                    <img
                                        src={phoneCallIcon}
                                        width="15"
                                        height="15"
                                        className="d-inline-block "
                                        alt="callMe"
                                    />{" "}
                                    Helista mulle
                                </a>
                            </Badge>{" "}
                        </ListGroup.Item>
                        <ListGroup.Item className=" mb-5">
                            <img
                                src={phoneIcon}
                                width="40"
                                height="40"
                                className="d-inline-block me-2"
                                alt="phone"
                            />{" "}
                            Komplekteerija — Maksim  +372 55 15 384
                            <Badge type="button" bg="light" text="dark" className="ms-3" >
                                <a href="tel: +372 55 15 384" className="text-decoration-none link-dark">
                                    <img
                                        src={phoneCallIcon}
                                        width="15"
                                        height="15"
                                        className="d-inline-block "
                                        alt="callMe"
                                    />{" "}
                                    Helista mulle
                                </a>
                            </Badge>{" "}
                        </ListGroup.Item>
                    </ListGroup>
                </Container>
                <Container className="w-50 me-0 mb-5 mt-5">
                    <Form className=" ms-0" onSubmit={handleSubmit(onSubmit)} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Sinu nimi</Form.Label>
                                <Form.Control type="text" placeholder="Sisestage oma nimi" />
                            </Form.Group>
                            <Form.Label>E-posti aadress</Form.Label>
                            <Form.Control type="email" placeholder="Sisestage e-posti aadress"
                                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
                            <Form.Text className="text-muted">
                                Me ei jaga teie e-posti kunagi kellegi teisega.
                            </Form.Text>
                            {errors.email && <span>Kehtetu e-posti aadress</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Sinu sõnum</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="outline-secondary" type="submit" className="w-100">
                            Saada sõnum
                        </Button>
                    </Form>
                </Container>
            </Container>
        </>
    )
}

export default ContactComponent;