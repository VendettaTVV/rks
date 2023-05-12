
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import carousel1 from '../../pictures/body_carousel/carousel1.jpg';
import carousel2 from '../../pictures/body_carousel/carousel2.jpg';
import carousel3 from '../../pictures/body_carousel/carousel3.jpg';





function BodyComponent() {
    return (
        <Container className="bg-white mt-0 mb-0">
            <p className="text-center fw-bolder pt-5 fs-1 font-family-sans-serif ">
                Tere tulemast autovärvimistöökotta OÜ RKS!
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
            <p className="text-center pt-5 fs-2 font-family-sans-serif mb-0 pb-5">
                Auto oskuslikku värvimist võib nimetada omaette kunstiks ja see nõuab meistri osavat kätt. 
                Kere värvimistööd tähendavad tervet hulka operatsioone, mis on vajalikud, et esialgne tehasevärv 
                adekvaatselt taastada, sealhulgas sellised kihid nagu krunt, täitevkiht, värv ja lakk. Meie ettevõte 
                pakub igasuguse raskusastmega kereremonti, parimaid värvimaterjale, kontaktkeevitust, alumiiniumkeevitust,
                 plastikdetailide parandamist, klaaside vahetamist, kiiret tööd ja kvaliteedigarantiid.
            </p>
        </Container>
    )
}


export default BodyComponent;