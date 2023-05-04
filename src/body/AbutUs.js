import Container from "react-bootstrap/esm/Container";
import certificat1 from '../certificat1.jpg';
import certificat2 from '../certificat2.jpg';
import certificat3 from '../certificat3.jpg';
import partn1 from '../partn1.jpg';
import partn2 from '../partn2.png';
import partn3 from '../partn3.png';
import partn4 from '../partn4.png';
import partn5 from '../partn5.png';
import partn6 from '../partn6.png';


function InfoComponent() {
    return (
        <Container className='bg-light mt-0 mb-0'>
            <Container className="mt-0 pt-5 d-flex justify-content-around">
            <img
                src={certificat1}
                width="200"
                height="200"
                className='img-thumbnail'
                alt='Certificat1'
            />
            <img
                src={certificat2}
                width="200"
                height="200"
                className='img-thumbnail'
                alt='Certificat1'
            />
            <img
                src={certificat3}
                width="200"
                height="200"
                className='img-thumbnail'
                alt='Certificat1'
            />
            </Container>

            <p className="text-start pt-5 fs-4 font-family-sans-serif mb-0"> RKS OÜ (RKS LLC) is an industrial company that began its financial and economic activity in 2001. The main activity of the company comprises
                bodywork and automotive painting. We work with private customers, legal persons as well as all insurance companies. We offer a wide range of services,
                from small repairs (scratches on a car’s bodywork ) to repair of a damaged car. The following services are available at our workshop: auto glass replacement,
                bodywork, paintwork, towing services, air conditioner filling, repair of plastic parts, custom auto parts , welding, restoration of body geometry, tyre fitting.
                To establish the costs of repairs, vehicle inspection by a professional is required, if necessary, our specialist will come to the location of emergency transport.
                The main advantages of the services provided by RKS OÜ are high-quality work, individual customer approach as well as production and modern technology improvement.
                Our staff is actively involved in related training courses as repair technology is constantly changing. We only work with quality materials. Our body shop is
                equipped with the most modern equipment: a new paint booth and a stand for restoration of body geometry, resistance welding, welding on aluminum, repair of
                plastic parts, auto glass replacements. RKS OÜ is a member of AMTEL (International Organisation for Manufacturers of Motor Vehicles; www.amtel.ee), which allows
                us to share experiences with similar foreign companies and international organisations. For the convenience of our customers, there is a large guarded parking on
                the premises of the workshop.
            </p>
            <p className="fw-bolder pt-4 fs-4 font-family-sans-serif text-uppercase text-center">Our partners</p>
            <Container className="mt-0 pt-3 d-flex justify-content-around">
            <img
                src={partn1}
                width="150"
                height="150"
                className='img-thumbnail'
                alt='Certificat1'
            />
            <img
                src={partn2}
                width="150"
                height="150"
                className='img-thumbnail'
                alt='Certificat1'
            />
            <img
                src={partn3}
                width="150"
                height="150"
                className='img-thumbnail'
                alt='Certificat1'
            />
            <img
                src={partn4}
                width="150"
                height="150"
                className='img-thumbnail'
                alt='Certificat1'
            />
            <img
                src={partn5}
                width="150"
                height="150"
                className='img-thumbnail'
                alt='Certificat1'
            />
            <img
                src={partn6}
                width="150"
                height="150"
                className='img-thumbnail'
                alt='Certificat1'
            />
            </Container>
        </Container>
    )
}

export default InfoComponent;