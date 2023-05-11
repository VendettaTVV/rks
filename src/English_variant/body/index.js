
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import carousel1 from '../../pictures/body_carousel/carousel1.jpg';
import carousel2 from '../../pictures/body_carousel/carousel2.jpg';
import carousel3 from '../../pictures/body_carousel/carousel3.jpg';





function BodyComponent() {
    return (
        <Container className="bg-white mt-0 mb-0">
            <p className="text-center fw-bolder pt-5 fs-1 font-family-sans-serif ">
                Welcome to RKS OÜ, a car painting shop!
            </p>
            <Carousel className="mt-5">
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <p className="text-center pt-5 fs-2 font-family-sans-serif mb-0 pb-5">Professional car painting is
                art in itself that requires a truly skillful hand. Car body painting implies a range of operations
                to adequately restore all factory lacquer and spray coating, including the layers of soil, filler,
                paint, and varnish. Our company offers bodywork of any complexity, best lacquer and painting
                materials, high-quality painting equipment, prompt completion of works, and high quality guarantee.
            </p>
        </Container>
    )
}


export default BodyComponent;