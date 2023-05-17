
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import carousel1 from '../../pictures/body_carousel/carousel1.jpg';
import carousel2 from '../../pictures/body_carousel/carousel2.jpg';
import carousel3 from '../../pictures/body_carousel/carousel3.jpg';





function RuBodyComponent() {
    return (
        <Container className="bg-white mt-0 mb-0">
            <p className="text-center fw-bolder pt-5 fs-1 font-family-sans-serif ">
                Добро пожаловать в автопокрасочную OÜ RKS.
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
                Профессиональная покраска автомобиля — это само по себе искусство, требующее умелой руки мастера.
                Покраска кузова подразумевает под собой целый комплекс операций, который необходимо произвести для
                адекватного восстановления всего заводского лако-покрасочного покрытия, включая слои грунта,
                наполнителя, краски и лака. Наша фирма предлагает выполнение кузовного ремонта любой сложности,
                лучшие лако-покрасочные материалы, высококачественное покрасочное оборудование, оперативное
                выполнение работ и гарантию высокого качества.
            </p>
        </Container>
    )
}


export default RuBodyComponent;